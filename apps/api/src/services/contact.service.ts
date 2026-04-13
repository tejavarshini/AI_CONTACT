import { env } from "../lib/env.js";
import { prisma } from "../lib/db.js";
import { embedText, extractContactFromText } from "./ai.service.js";
import type { ContactSummary, CreateContactInput, DashboardActivity, DashboardContact, DashboardSummary, FollowUpItem, RankedContactResult, TimelineEvent } from "./types.js";

const IMPORTANT_TAGS = ["referrals", "hiring", "internship", "founder", "mentor", "priority"];

type TimelineEventType =
  | "CONTACT_ADDED"
  | "NOTES_ADDED"
  | "AI_QUERY"
  | "FOLLOW_UP_TRIGGERED"
  | "CONTACTED"
  | "SNOOZED";

function vectorLiteral(embedding: number[]): string {
  return `[${embedding.join(",")}]`;
}

type ExplainableContact = {
  organization: string | null;
  sourceContext: string | null;
  howCanHelp: string | null;
  tags: string[];
};

function buildReasons(contact: ExplainableContact, query: string): string[] {
  const reasons: string[] = [];
  const queryLower = query.toLowerCase();

  if (contact.howCanHelp) reasons.push(`Can help with: ${contact.howCanHelp}`);
  if (contact.organization) reasons.push(`Works at ${contact.organization}`);
  if (contact.sourceContext) reasons.push(`Met in ${contact.sourceContext}`);

  const matchedTag = contact.tags.find((tag: string) => queryLower.includes(tag.toLowerCase()));
  if (matchedTag) reasons.push(`Matched tag: ${matchedTag}`);

  return reasons.slice(0, 3);
}

function calculateImportance(tags: string[], howCanHelp?: string | null): number {
  const importantTagHits = tags.filter((tag) => IMPORTANT_TAGS.includes(tag.toLowerCase())).length;
  const helperBoost = howCanHelp ? 2 : 0;
  return Math.min(10, importantTagHits * 2 + helperBoost + Math.min(3, tags.length));
}

function toDashboardContact(contact: {
  id: string;
  name: string;
  organization: string | null;
  notes: string | null;
  tags: string[];
  lastContacted: Date | null;
  snoozedUntil: Date | null;
}): DashboardContact {
  return {
    id: contact.id,
    name: contact.name,
    company: contact.organization ?? "—",
    note: contact.notes ?? "No notes yet",
    tags: contact.tags,
    status: contact.snoozedUntil ? "inactive" : "active",
    href: `/contacts/id/${contact.id}`
  };
}

function aiRelevanceScore(contact: {
  tags: string[];
  skills: string[];
  domains: string[];
  howCanHelp: string | null;
  importanceScore: number;
}): number {
  const important = contact.tags.filter((tag) => IMPORTANT_TAGS.includes(tag.toLowerCase())).length;
  const helpSignal = contact.howCanHelp ? 2 : 0;
  const breadth = Math.min(3, contact.skills.length + contact.domains.length);
  return Math.min(20, contact.importanceScore + important * 2 + helpSignal + breadth);
}

async function logTimelineEvent(input: {
  userId: string;
  contactId: string;
  type: TimelineEventType;
  message: string;
  reason?: string;
  metadata?: unknown;
}) {
  return prisma.contactTimelineEvent.create({
    data: {
      userId: input.userId,
      contactId: input.contactId,
      type: input.type,
      message: input.message,
      reason: input.reason,
      metadata: input.metadata ? (input.metadata as object) : undefined
    }
  });
}

async function logFollowUpEventIfNeeded(input: { userId: string; contactId: string; reason: string; score: number }) {
  const threshold = new Date(Date.now() - 12 * 60 * 60 * 1000);
  const recent = await prisma.contactTimelineEvent.findFirst({
    where: {
      userId: input.userId,
      contactId: input.contactId,
      type: "FOLLOW_UP_TRIGGERED",
      createdAt: { gt: threshold }
    }
  });

  if (recent) return;

  await logTimelineEvent({
    userId: input.userId,
    contactId: input.contactId,
    type: "FOLLOW_UP_TRIGGERED",
    reason: input.reason,
    message: `Follow-up triggered: ${input.reason}`,
    metadata: { score: input.score }
  });
}

function normalizeContactTags(tags: string[], fallback?: string): string[] {
  const normalized = tags.map((tag) => tag.trim()).filter(Boolean);
  if (fallback) {
    normalized.push(fallback.trim());
  }
  return Array.from(new Set(normalized));
}

async function persistContact(userId: string, contact: CreateContactInput) {
  const normalizedTags = normalizeContactTags(contact.tags, contact.sourceContext);
  const importanceScore = calculateImportance(normalizedTags, contact.howCanHelp ?? null);

  const created = await prisma.contact.create({
    data: {
      userId,
      name: contact.name,
      organization: contact.organization ?? null,
      roleTitle: contact.roleTitle ?? null,
      sourceContext: contact.sourceContext ?? null,
      howCanHelp: contact.howCanHelp ?? null,
      notes: contact.notes ?? null,
      rawInput: contact.rawInput ?? [contact.name, contact.organization, contact.howCanHelp, contact.notes].filter(Boolean).join(". "),
      tags: normalizedTags,
      domains: contact.domains,
      skills: contact.skills,
      importanceScore,
      lastContacted: new Date()
    }
  });

  const embeddingInput = [
    contact.name,
    contact.organization,
    contact.roleTitle,
    contact.sourceContext,
    contact.howCanHelp,
    contact.notes,
    normalizedTags.join(" "),
    contact.domains.join(" "),
    contact.skills.join(" ")
  ]
    .filter(Boolean)
    .join(" ");

  const embedding = await embedText(embeddingInput);

  await prisma.$executeRawUnsafe(
    `INSERT INTO "ContactEmbedding" ("contactId", embedding, "createdAt", "updatedAt") VALUES ($1, $2::vector, NOW(), NOW())
     ON CONFLICT ("contactId") DO UPDATE SET embedding = EXCLUDED.embedding, "updatedAt" = NOW()`,
    created.id,
    vectorLiteral(embedding)
  );

  await logTimelineEvent({
    userId,
    contactId: created.id,
    type: "CONTACT_ADDED",
    message: `Contact added: ${contact.name}`,
    reason: contact.sourceContext ?? "Structured contact added",
    metadata: {
      tags: normalizedTags,
      domains: contact.domains,
      howCanHelp: contact.howCanHelp ?? null
    }
  });

  return created;
}

export async function captureContact(userId: string, inputText: string) {
  const structured = await extractContactFromText(inputText);
  const importanceScore = calculateImportance(structured.tags, structured.howCanHelp ?? null);

  const contact = await prisma.contact.create({
    data: {
      userId,
      name: structured.name,
      organization: structured.organization,
      roleTitle: structured.roleTitle,
      sourceContext: structured.sourceContext,
      howCanHelp: structured.howCanHelp,
      notes: structured.notes,
      rawInput: inputText,
      tags: structured.tags,
      domains: structured.domains,
      skills: structured.skills,
      importanceScore,
      lastContacted: new Date()
    }
  });

  const embeddingInput = [
    structured.name,
    structured.organization,
    structured.roleTitle,
    structured.sourceContext,
    structured.howCanHelp,
    structured.notes,
    structured.tags.join(" "),
    structured.domains.join(" "),
    structured.skills.join(" ")
  ]
    .filter(Boolean)
    .join(" ");

  const embedding = await embedText(embeddingInput);

  await prisma.$executeRawUnsafe(
    `INSERT INTO \"ContactEmbedding\" (\"contactId\", embedding, \"createdAt\", \"updatedAt\") VALUES ($1, $2::vector, NOW(), NOW())
     ON CONFLICT (\"contactId\") DO UPDATE SET embedding = EXCLUDED.embedding, \"updatedAt\" = NOW()`,
    contact.id,
    vectorLiteral(embedding)
  );

  await logTimelineEvent({
    userId,
    contactId: contact.id,
    type: "CONTACT_ADDED",
    message: `Contact added from natural language input: ${inputText.slice(0, 120)}`,
    reason: structured.sourceContext ?? "New contact added",
    metadata: { tags: structured.tags, domains: structured.domains }
  });

  return contact;
}

export async function createContact(userId: string, contact: CreateContactInput) {
  return persistContact(userId, contact);
}

type SearchRow = {
  id: string;
  name: string;
  organization: string | null;
  roleTitle: string | null;
  sourceContext: string | null;
  howCanHelp: string | null;
  tags: string[];
  domains: string[];
  skills: string[];
  lastContacted: Date | null;
  similarity: number;
};

export async function searchContacts(userId: string, query: string, limit = 8): Promise<RankedContactResult[]> {
  const queryEmbedding = await embedText(query);
  const rows = await prisma.$queryRawUnsafe<SearchRow[]>(
    `SELECT c.id, c.name, c.organization, c.\"roleTitle\", c.\"sourceContext\", c.\"howCanHelp\", c.tags, c.domains, c.skills, c.\"lastContacted\", 
       1 - (ce.embedding <=> $1::vector) AS similarity
     FROM \"ContactEmbedding\" ce
     JOIN \"Contact\" c ON c.id = ce.\"contactId\"
     WHERE c.\"userId\" = $2
     ORDER BY ce.embedding <=> $1::vector ASC
     LIMIT $3`,
    vectorLiteral(queryEmbedding),
    userId,
    limit
  );

  const mapped = rows.map((row: SearchRow) => {
    const contactLike: ExplainableContact = {
      organization: row.organization,
      sourceContext: row.sourceContext,
      howCanHelp: row.howCanHelp,
      tags: row.tags,
    };

    return {
      id: row.id,
      name: row.name,
      organization: row.organization,
      roleTitle: row.roleTitle,
      sourceContext: row.sourceContext,
      howCanHelp: row.howCanHelp,
      tags: row.tags,
      domains: row.domains,
      skills: row.skills,
      similarity: Number(row.similarity),
      lastContacted: row.lastContacted ? row.lastContacted.toISOString() : null,
      reasons: buildReasons(contactLike, query)
    };
  });

  await Promise.all(
    mapped.slice(0, 3).map((row) =>
      logTimelineEvent({
        userId,
        contactId: row.id,
        type: "AI_QUERY",
        message: `AI query matched contact for: ${query}`,
        reason: row.reasons[0] ?? "Semantic match",
        metadata: { similarity: row.similarity }
      })
    )
  );

  return mapped;
}

export async function listContacts(userId: string): Promise<ContactSummary[]> {
  const contacts = await prisma.contact.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    take: 100
  });

  return contacts.map((contact) => ({
    id: contact.id,
    name: contact.name,
    organization: contact.organization,
    roleTitle: contact.roleTitle,
    sourceContext: contact.sourceContext,
    notes: contact.notes,
    tags: contact.tags,
    importanceScore: contact.importanceScore,
    lastContacted: contact.lastContacted ? contact.lastContacted.toISOString() : null,
    snoozedUntil: contact.snoozedUntil ? contact.snoozedUntil.toISOString() : null,
    createdAt: contact.createdAt.toISOString(),
    updatedAt: contact.updatedAt.toISOString()
  }));
}

export async function getContactById(userId: string, contactId: string): Promise<ContactSummary | null> {
  const contact = await prisma.contact.findFirst({
    where: { id: contactId, userId }
  });

  if (!contact) return null;

  return {
    id: contact.id,
    name: contact.name,
    organization: contact.organization,
    roleTitle: contact.roleTitle,
    sourceContext: contact.sourceContext,
    notes: contact.notes,
    tags: contact.tags,
    importanceScore: contact.importanceScore,
    lastContacted: contact.lastContacted ? contact.lastContacted.toISOString() : null,
    snoozedUntil: contact.snoozedUntil ? contact.snoozedUntil.toISOString() : null,
    createdAt: contact.createdAt.toISOString(),
    updatedAt: contact.updatedAt.toISOString()
  };
}

export async function getFollowUps(userId: string, daysInactive = 60): Promise<FollowUpItem[]> {
  const cutoff = new Date(Date.now() - daysInactive * 24 * 60 * 60 * 1000);

  const contacts = await prisma.contact.findMany({
    where: {
      userId,
      AND: [
        { OR: [{ snoozedUntil: null }, { snoozedUntil: { lt: new Date() } }] },
        { OR: [{ lastContacted: null }, { lastContacted: { lt: cutoff } }] }
      ]
    },
    orderBy: { lastContacted: "asc" },
    take: 20
  });

  const items: FollowUpItem[] = contacts.map((contact) => {
    const score = aiRelevanceScore({
      tags: contact.tags,
      skills: contact.skills,
      domains: contact.domains,
      howCanHelp: contact.howCanHelp,
      importanceScore: contact.importanceScore
    });

    const days = contact.lastContacted
      ? Math.floor((Date.now() - contact.lastContacted.getTime()) / (24 * 60 * 60 * 1000))
      : daysInactive;
    const isImportant = contact.tags.some((tag) => IMPORTANT_TAGS.includes(tag.toLowerCase())) || contact.importanceScore >= 7;

    const reason = isImportant
      ? `Important contact and inactive for ${days} days`
      : `No interaction in ${days} days`;

    return {
      id: contact.id,
      name: contact.name,
      lastContacted: contact.lastContacted ? contact.lastContacted.toISOString() : null,
      reason,
      relevanceScore: score,
      suggestion: `Hi ${contact.name}, great catching up earlier. Wanted to reconnect and continue our conversation${contact.organization ? ` at ${contact.organization}` : ""}.`
    };
  });

  await Promise.all(
    items.map((item) => logFollowUpEventIfNeeded({ userId, contactId: item.id, reason: item.reason, score: item.relevanceScore }))
  );

  return items.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

export async function markContacted(userId: string, contactId: string) {
  const existing = await prisma.contact.findFirst({ where: { id: contactId, userId } });
  if (!existing) {
    throw new Error("Contact not found");
  }

  const contact = await prisma.contact.update({
    where: { id: existing.id },
    data: {
      lastContacted: new Date(),
      snoozedUntil: null
    }
  });

  await logTimelineEvent({
    userId,
    contactId,
    type: "CONTACTED",
    message: `Marked ${contact.name} as contacted.`
  });

  return contact;
}

export async function snoozeContact(userId: string, contactId: string, days = 7) {
  const existing = await prisma.contact.findFirst({ where: { id: contactId, userId } });
  if (!existing) {
    throw new Error("Contact not found");
  }

  const snoozedUntil = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  const contact = await prisma.contact.update({
    where: { id: existing.id },
    data: { snoozedUntil }
  });

  await logTimelineEvent({
    userId,
    contactId,
    type: "SNOOZED",
    message: `Snoozed follow-up for ${contact.name} by ${days} day(s).`,
    metadata: { days, snoozedUntil: snoozedUntil.toISOString() }
  });

  return contact;
}

export async function addContactNote(userId: string, contactId: string, note: string) {
  const existing = await prisma.contact.findFirst({ where: { id: contactId, userId } });
  if (!existing) return null;

  const merged = [existing.notes, note].filter(Boolean).join("\n");
  const contact = await prisma.contact.update({
    where: { id: contactId },
    data: { notes: merged }
  });

  await logTimelineEvent({
    userId,
    contactId,
    type: "NOTES_ADDED",
    message: `Added note: ${note.slice(0, 120)}`
  });

  return contact;
}

export async function getDashboardSummary(userId: string): Promise<DashboardSummary> {
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - 7);

  const [totalContacts, semanticMatches, followUpContacts, thisWeek, topContacts, recentActivity] = await Promise.all([
    prisma.contact.count({ where: { userId } }),
    prisma.contact.count({
      where: {
        userId,
        OR: [{ howCanHelp: { not: null } }, { sourceContext: { not: null } }, { tags: { isEmpty: false } }]
      }
    }),
    prisma.contact.count({
      where: {
        userId,
        AND: [
          { OR: [{ snoozedUntil: null }, { snoozedUntil: { lt: new Date() } }] },
          { OR: [{ lastContacted: null }, { lastContacted: { lt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) } }] }
        ]
      }
    }),
    prisma.contact.count({ where: { userId, createdAt: { gte: weekStart } } }),
    prisma.contact.findMany({
      where: { userId },
      orderBy: [{ importanceScore: "desc" }, { updatedAt: "desc" }],
      take: 4
    }),
    prisma.contactTimelineEvent.findMany({
      where: { userId, createdAt: { gte: weekStart } },
      orderBy: { createdAt: "desc" },
      take: 5,
      include: {
        contact: { select: { name: true } }
      }
    })
  ]);

  const priorityContactRecord = topContacts[0] ?? null;
  const priorityContact = priorityContactRecord ? toDashboardContact(priorityContactRecord) : null;

  const mappedContacts = topContacts.map(toDashboardContact);
  const mappedActivity: DashboardActivity[] = recentActivity.map((event) => ({
    id: event.id,
    contactId: event.contactId,
    contactName: event.contact.name,
    type: event.type,
    message: event.message,
    createdAt: event.createdAt.toISOString()
  }));

  return {
    stats: {
      totalContacts,
      semanticMatches,
      needsFollowUp: followUpContacts,
      thisWeek
    },
    priorityContact,
    priorityReason: priorityContactRecord
      ? `${priorityContactRecord.importanceScore > 6 ? "High priority" : "Recommended"} contact based on backend scoring.`
      : null,
    topContacts: mappedContacts,
    recentActivity: mappedActivity,
    systemStatus: {
      api: "ok",
      aiProvider: env.AI_PROVIDER
    }
  };
}

export async function getTimeline(userId: string, contactId: string): Promise<TimelineEvent[]> {
  const events = await prisma.contactTimelineEvent.findMany({
    where: { userId, contactId },
    orderBy: { createdAt: "desc" },
    take: 100
  });

  return events.map((event) => ({
    id: event.id,
    contactId: event.contactId,
    type: event.type,
    reason: event.reason,
    message: event.message,
    createdAt: event.createdAt.toISOString()
  }));
}
