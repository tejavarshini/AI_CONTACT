"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useMemo, useState } from "react";
import { listContacts, type ContactDetail } from "../../lib/api";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ChatBubble } from "../ui/chat-bubble";
import { Input } from "../ui/input";
import { Tag } from "../ui/tag";

type ChatUIProps = {
  userId?: string;
};

type AssistantCard = {
  id: string;
  name: string;
  organization: string;
  canHelpWith: string;
  reason: string;
  score: number;
  href: string;
  matchedKeywords: string[];
};

type AssistantSection = {
  title: string;
  cards: AssistantCard[];
};

type AssistantPayload = {
  intro: string;
  sections: AssistantSection[];
};

type AggregatedMatch = {
  contact: ContactDetail;
  score: number;
  matchedFields: Set<"name" | "company" | "notes" | "tags">;
  matchedKeywords: Set<string>;
};

type Message = {
  tone: "user" | "assistant";
  text: string;
  payload?: AssistantPayload;
};

const stopwords = [
  "who",
  "is",
  "can",
  "help",
  "with",
  "the",
  "a",
  "an",
  "at",
  "in",
  "on",
  "for",
  "to",
  "of",
  "show",
  "me",
  "from",
  "i",
  "please",
  "are",
  "should",
  "my",
  "and"
];

const STOPWORDS = new Set(stopwords);

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function cleanQuery(query: string): string[] {
  const normalized = normalizeText(query);
  if (!normalized) return [];

  return Array.from(
    new Set(
      normalized
        .split(" ")
        .map((term) => term.trim())
        .filter((term) => term.length > 1 && !STOPWORDS.has(term))
    )
  );
}

function containsKeyword(value: string | null | undefined, keywords: string[]): boolean {
  if (!value || keywords.length === 0) return false;
  const normalized = normalizeText(value);
  return keywords.some((keyword) => normalized.includes(keyword));
}

function matchedKeywordsIn(value: string | null | undefined, keywords: string[]): string[] {
  if (!value || keywords.length === 0) return [];
  const normalized = normalizeText(value);
  return keywords.filter((keyword) => normalized.includes(keyword));
}

function extractCompanyQuery(query: string): string | null {
  const fromMatch = query.match(/from\s+([a-zA-Z0-9 .&-]+)/i);
  if (fromMatch?.[1]) return normalizeText(fromMatch[1]);
  return null;
}

function isFollowUpQuery(query: string): boolean {
  return /(follow\s*-?up|reconnect|reach out|check in)/i.test(query);
}

function toHelpText(contact: ContactDetail): string {
  if (contact.howCanHelp?.trim()) return contact.howCanHelp;
  if (contact.tags.length > 0) return contact.tags.join(", ");
  return "Not specified yet";
}

function buildReason(parts: string[]): string {
  if (parts.length === 0) return "Based on what is saved in your contacts.";
  const first = parts[0];
  const second = parts[1];

  if (!first) return "Based on what is saved in your contacts.";
  if (!second) return first;
  return `${first} and ${second}`;
}

function createCard(contact: ContactDetail, score: number, reasonParts: string[], matchedKeywords: string[]): AssistantCard {
  return {
    id: contact.id,
    name: contact.name,
    organization: contact.organization ?? "Not shared",
    canHelpWith: toHelpText(contact),
    reason: buildReason(reasonParts),
    score,
    href: `/contacts/id/${contact.id}`,
    matchedKeywords,
  };
}

function buildFieldReason(matchedFields: Set<"name" | "company" | "notes" | "tags">, matchedKeywords: string[]): string[] {
  const reasons: string[] = [];

  if (matchedKeywords.length > 0) {
    reasons.push(`Matches your request for ${matchedKeywords.join(", ")}`);
  }

  if (matchedFields.has("name")) reasons.push("Contact name matches your keywords");
  if (matchedFields.has("company")) reasons.push("Company matches your keywords");
  if (matchedFields.has("notes")) reasons.push("Notes match your keywords");
  if (matchedFields.has("tags")) reasons.push("Tagged with related topics");

  if (reasons.length === 0) {
    reasons.push("Matches your saved information");
  }

  return reasons;
}

function scoreContacts(contacts: ContactDetail[], query: string): AssistantCard[] {
  const keywords = cleanQuery(query);

  const resultMap = new Map<string, AggregatedMatch>();

  contacts.forEach((contact) => {
    let score = 0;
    const matchedFields = new Set<"name" | "company" | "notes" | "tags">();
    const matchedKeywordSet = new Set<string>();

    const nameMatches = matchedKeywordsIn(contact.name, keywords);
    if (nameMatches.length > 0) {
      score += 5;
      matchedFields.add("name");
      nameMatches.forEach((keyword) => matchedKeywordSet.add(keyword));
    }

    const companyMatches = matchedKeywordsIn(contact.organization, keywords);
    if (companyMatches.length > 0) {
      score += 3;
      matchedFields.add("company");
      companyMatches.forEach((keyword) => matchedKeywordSet.add(keyword));
    }

    const notesSource = [contact.notes ?? "", contact.howCanHelp ?? "", contact.rawInput ?? ""].join(" ");
    const notesMatches = matchedKeywordsIn(notesSource, keywords);
    if (notesMatches.length > 0) {
      score += 4;
      matchedFields.add("notes");
      notesMatches.forEach((keyword) => matchedKeywordSet.add(keyword));
    }

    const tagMatches = keywords.filter((keyword) => contact.tags.some((tag) => normalizeText(tag).includes(keyword)));
    if (tagMatches.length > 0) {
      score += 2;
      matchedFields.add("tags");
      tagMatches.forEach((keyword) => matchedKeywordSet.add(keyword));
    }

    if (score <= 0) {
      return;
    }

    const existing = resultMap.get(contact.id);
    if (existing) {
      existing.score += score;
      matchedFields.forEach((field) => existing.matchedFields.add(field));
      matchedKeywordSet.forEach((keyword) => existing.matchedKeywords.add(keyword));
      return;
    }

    resultMap.set(contact.id, {
      contact,
      score,
      matchedFields,
      matchedKeywords: matchedKeywordSet,
    });
  });

  const results = Array.from(resultMap.values())
    .map((match) => {
      const matchedKeywords = Array.from(match.matchedKeywords);
      const coverageBonus = matchedKeywords.length;
      const reasonParts = buildFieldReason(match.matchedFields, matchedKeywords);
      return createCard(match.contact, match.score + coverageBonus, reasonParts, matchedKeywords);
    })
    .sort((left, right) => {
      const byScore = right.score - left.score;
      if (byScore !== 0) return byScore;

      const byCoverage = right.matchedKeywords.length - left.matchedKeywords.length;
      if (byCoverage !== 0) return byCoverage;

      return left.name.localeCompare(right.name);
    });

  return results;
}

function buildFollowUpCards(contacts: ContactDetail[]): AssistantCard[] {
  const now = Date.now();

  return [...contacts]
    .sort((left, right) => {
      const leftTime = left.lastContacted ? new Date(left.lastContacted).getTime() : 0;
      const rightTime = right.lastContacted ? new Date(right.lastContacted).getTime() : 0;
      return leftTime - rightTime;
    })
    .slice(0, 6)
    .map((contact) => {
      const days = contact.lastContacted ? Math.max(0, Math.floor((now - new Date(contact.lastContacted).getTime()) / (24 * 60 * 60 * 1000))) : 60;
      const reason = contact.lastContacted ? `Last spoke ${days} day${days === 1 ? "" : "s"} ago` : "No recent conversation saved";
      return createCard(contact, Math.min(20, days), [reason], []);
    });
}

function buildCompanyCards(contacts: ContactDetail[], companyQuery: string): AssistantCard[] {
  const cards = contacts
    .filter((contact) => normalizeText(contact.organization ?? "").includes(companyQuery))
    .map((contact) => createCard(contact, 10, [`Works at ${contact.organization ?? "this company"}`], [companyQuery]))
    .sort((left, right) => left.name.localeCompare(right.name));

  return cards;
}

function classify(cards: AssistantCard[]): AssistantSection[] {
  if (cards.length === 0) {
    return [];
  }

  const best = cards[0] ? [cards[0]] : [];
  const good = cards.slice(1, 4);
  const others = cards.slice(4);

  const sections: AssistantSection[] = [];
  if (best.length > 0) sections.push({ title: "Best Match", cards: best });
  if (good.length > 0) sections.push({ title: "Good Matches", cards: good });
  if (others.length > 0) sections.push({ title: "Others", cards: others });

  return sections;
}

function buildResponse(contacts: ContactDetail[], query: string): AssistantPayload {
  const keywords = cleanQuery(query);
  const companyQuery = extractCompanyQuery(query);

  if (keywords.length === 0 && !isFollowUpQuery(query) && !companyQuery) {
    return {
      intro: "Please add one or two specific keywords so I can find the best match.",
      sections: []
    };
  }

  if (isFollowUpQuery(query)) {
    const cards = buildFollowUpCards(contacts);
    if (cards.length === 0) {
      return {
        intro: "No exact match found, but these people might still help.",
        sections: []
      };
    }

    return {
      intro: "Here are people to reconnect with:",
      sections: [{ title: "People to Reconnect With", cards }]
    };
  }

  if (companyQuery) {
    const cards = buildCompanyCards(contacts, companyQuery);
    if (cards.length === 0) {
      return {
        intro: "No exact match found, but these people might still help.",
        sections: [{ title: "Closest Matches", cards: scoreContacts(contacts, query).slice(0, 3) }]
      };
    }

    return {
      intro: "Here are people who can help you:",
      sections: [{ title: "Best Match", cards: cards.slice(0, 1) }, { title: "Good Matches", cards: cards.slice(1) }].filter((section) => section.cards.length > 0)
    };
  }

  const scored = scoreContacts(contacts, query);
  const strong = scored.filter((card) => card.score > 0);

  if (strong.length === 0) {
    return {
      intro: "No exact match found, but these people might still help.",
      sections: [{ title: "Closest Matches", cards: scored.slice(0, 3) }]
    };
  }

  return {
    intro: "Here are people who can help you:",
    sections: classify(strong)
  };
}

function highlightText(value: string, keywords: string[]): ReactNode {
  const meaningfulKeywords = keywords.filter((keyword) => !STOPWORDS.has(keyword));
  if (!value || meaningfulKeywords.length === 0) return value;

  const escaped = meaningfulKeywords
    .filter(Boolean)
    .map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (escaped.length === 0) return value;

  const regex = new RegExp(`(${escaped.join("|")})`, "ig");
  const parts = value.split(regex);

  return parts.map((part, index) => (
    escaped.some((keyword) => part.toLowerCase() === keyword.toLowerCase())
      ? <mark key={`${part}-${index}`} className="assistant-highlight">{part}</mark>
      : <span key={`${part}-${index}`}>{part}</span>
  ));
}

export function ChatUI({ userId = "demo-user-1" }: ChatUIProps) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { tone: "assistant", text: "Ask who can help with internships, hiring, referrals, or anything you need." }
  ]);
  const [errorText, setErrorText] = useState<string | null>(null);

  const suggestions = useMemo(
    () => ["Who can help with internships?", "Show people from Amazon", "Who should I reconnect with?"],
    []
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = query.trim();
    if (!trimmed || isLoading) return;

    setErrorText(null);
    setMessages((prev) => [...prev, { tone: "user", text: trimmed }]);
    setQuery("");
    setIsLoading(true);

    try {
      const contacts = await listContacts(userId);
      const payload = buildResponse(contacts, trimmed);
      setMessages((prev) => [...prev, { tone: "assistant", text: payload.intro, payload }]);
    } catch {
      setErrorText("We could not reach the server. Please check that the app is running and try again.");
      setMessages((prev) => [
        ...prev,
        {
          tone: "assistant",
          text: "I had trouble connecting just now. Please try again in a moment."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function applySuggestion(prompt: string) {
    setQuery(prompt);
  }

  function clearChat() {
    setMessages([{ tone: "assistant", text: "Reset done. Ask a new question whenever you are ready." }]);
    setErrorText(null);
  }

  return (
    <Card className="chat-ui">
      <div className="stack-8">
        <div className="label">Ask for suggestions</div>
        <h3 className="chat-ui__title">Ask who can help you</h3>
      </div>
      <div className="chat-ui__messages" role="log" aria-live="polite" aria-label="Assistant conversation">
        {messages.map((message, index) => (
          <ChatBubble key={`${message.tone}-${index}`} tone={message.tone}>
            <div className="stack-12">
              <p className="no-margin">{message.text}</p>
              {message.payload ? (
                <div className="assistant-results">
                  {message.payload.sections.map((section) => (
                    <div key={`${section.title}-${index}`} className="assistant-results__section">
                      <div className="assistant-results__heading">{section.title}</div>
                      <div className="assistant-results__cards">
                        {section.cards.map((card) => (
                          <article key={card.id} className="assistant-result-card">
                            <div className="assistant-result-card__top">
                              <strong>{card.name}</strong>
                              <Tag>{card.score}</Tag>
                            </div>
                            <p className="muted no-margin">Where they work: {highlightText(card.organization, card.matchedKeywords)}</p>
                            <p className="no-margin">Can help with: {highlightText(card.canHelpWith, card.matchedKeywords)}</p>
                            <p className="muted no-margin">Why this match: {highlightText(card.reason, card.matchedKeywords)}</p>
                            <Link className="button button--ghost button--small" href={card.href}>View details</Link>
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </ChatBubble>
        ))}
        {isLoading ? (
          <ChatBubble tone="assistant">
            <span className="typing-dots" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </span>
          </ChatBubble>
        ) : null}
      </div>
      <div className="stack-8">
        <div className="flex-wrap gap-8">
          {suggestions.map((item) => (
            <button key={item} type="button" className="tag tag--interactive" onClick={() => applySuggestion(item)}>
              {item}
            </button>
          ))}
          <Tag tone="success">Smart suggestions</Tag>
        </div>
        <form className="chat-ui__composer" onSubmit={handleSubmit}>
          <Input
            placeholder="Example: Who can help me with internships?"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Assistant query"
          />
          <div className="chat-ui__actions">
            <Button variant="ghost" onClick={clearChat} disabled={isLoading}>Reset</Button>
            <Button type="submit" disabled={isLoading || !query.trim()}>{isLoading ? "Thinking..." : "Ask"}</Button>
          </div>
        </form>
        {errorText ? <p className="error no-margin">{errorText}</p> : null}
      </div>
    </Card>
  );
}
