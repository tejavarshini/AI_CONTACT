"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Card } from "../../ui/card";
import { StatsCard } from "../../features/stats-card";
import { ContactRow } from "../../features/contact-row";
import { Input } from "../../ui/input";
import { Tag } from "../../ui/tag";
import { HighlightCard } from "../../features/highlight-card";
import { listContacts, type ContactDetail } from "../../../lib/api";

const USER_ID = "demo-user-1";
const SEARCH_STOPWORDS = new Set(["who", "is", "can", "help", "with", "the", "a", "an", "at", "in", "on", "for", "to", "of", "i", "me"]);

function normalizeSearch(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function extractSearchKeywords(value: string): string[] {
  const normalized = normalizeSearch(value);
  if (!normalized) return [];

  return Array.from(new Set(normalized.split(" ").filter((token) => token.length > 1 && !SEARCH_STOPWORDS.has(token))));
}

function scoreSearchMatch(contact: ContactDetail, keywords: string[]): { score: number; matchedFields: string[] } {
  let score = 0;
  const matchedFields: string[] = [];

  const nameText = normalizeSearch(contact.name);
  if (keywords.some((keyword) => nameText.includes(keyword))) {
    score += 5;
    matchedFields.push("name");
  }

  const companyText = normalizeSearch(contact.organization ?? "");
  if (keywords.some((keyword) => companyText.includes(keyword))) {
    score += 3;
    matchedFields.push("company");
  }

  const notesText = normalizeSearch([contact.notes ?? "", contact.sourceContext ?? "", contact.howCanHelp ?? "", contact.rawInput ?? ""].join(" "));
  if (keywords.some((keyword) => notesText.includes(keyword))) {
    score += 4;
    matchedFields.push("notes");
  }

  const tagText = normalizeSearch(contact.tags.join(" "));
  if (keywords.some((keyword) => tagText.includes(keyword))) {
    score += 2;
    matchedFields.push("tags");
  }

  return { score, matchedFields };
}

export function DashboardView() {
  const [searchText, setSearchText] = useState("");

  const contactsQuery = useQuery({
    queryKey: ["contacts", USER_ID],
    queryFn: () => listContacts(USER_ID)
  });

  const contacts = contactsQuery.data ?? [];
  const searchKeywords = useMemo(() => extractSearchKeywords(searchText), [searchText]);

  const searchRecommendations = useMemo(() => {
    if (searchKeywords.length === 0) return [];

    return contacts
      .map((contact) => {
        const { score, matchedFields } = scoreSearchMatch(contact, searchKeywords);
        return {
          id: contact.id,
          name: contact.name,
          organization: contact.organization ?? "Not shared",
          score,
          matchedFields,
          href: `/contacts/id/${contact.id}`,
        };
      })
      .filter((item) => item.score > 0)
      .sort((left, right) => right.score - left.score || left.name.localeCompare(right.name))
      .slice(0, 5);
  }, [contacts, searchKeywords]);

  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const followUpCutoff = now - 60 * 24 * 60 * 60 * 1000;

  const topContacts = [...contacts]
    .sort((left, right) => {
      if (right.importanceScore !== left.importanceScore) {
        return right.importanceScore - left.importanceScore;
      }

      return new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime();
    })
    .slice(0, 4)
    .map((contact) => ({
      id: contact.id,
      name: contact.name,
      company: contact.organization ?? "—",
      note: contact.notes ?? contact.sourceContext ?? "No notes yet",
      tags: contact.tags,
      status: (contact.snoozedUntil ? "inactive" : "active") as "active" | "inactive",
      href: `/contacts/id/${contact.id}`
    }));

  const priorityContact = topContacts[0] ?? null;
  const totalContacts = contacts.length;
  const semanticMatches = contacts.filter((contact) => contact.tags.length > 0 || contact.sourceContext || contact.roleTitle || contact.notes).length;
  const needsFollowUp = contacts.filter((contact) => {
    if (contact.snoozedUntil && new Date(contact.snoozedUntil).getTime() > now) {
      return false;
    }

    if (!contact.lastContacted) {
      return true;
    }

    return new Date(contact.lastContacted).getTime() < followUpCutoff;
  }).length;
  const thisWeek = contacts.filter((contact) => new Date(contact.createdAt).getTime() >= weekAgo).length;

  const recentActivity = [...contacts]
    .sort((left, right) => new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime())
    .slice(0, 5)
    .map((contact) => ({
      id: contact.id,
      contactId: contact.id,
      contactName: contact.name,
      type: contact.lastContacted ? "CONTACTED" : "CONTACT_ADDED",
      message: contact.lastContacted
        ? `Last contacted ${new Date(contact.lastContacted).toLocaleDateString()}`
        : `Saved to contacts ${new Date(contact.createdAt).toLocaleDateString()}`,
      createdAt: contact.updatedAt
    }));

  return (
    <div className="dashboard-summary stack-16">
      <section className="action-bar" aria-label="Primary actions">
        <div className="action-bar__search">
          <div className="action-bar__search-input-wrap">
            <span className="action-bar__search-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M20 20L16.65 16.65" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <Input
              className="action-bar__search-input"
              placeholder="Search saved people (name, company, notes, tags)"
              aria-label="Search saved contacts"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>
          {searchText.trim().length > 0 ? (
            <div className="dashboard-search-results" role="list" aria-label="Recommended matches">
              {searchRecommendations.length > 0 ? (
                searchRecommendations.map((person) => (
                  <Link key={person.id} href={person.href} className="dashboard-search-result" role="listitem">
                    <div className="dashboard-search-result__title">{person.name}</div>
                    <p className="muted no-margin">{person.organization}</p>
                    <p className="dashboard-search-result__meta no-margin">Matched in: {person.matchedFields.join(", ")}</p>
                  </Link>
                ))
              ) : (
                <p className="muted no-margin">No saved contacts match that search yet.</p>
              )}
            </div>
          ) : null}
        </div>
      </section>

      <section className="stats-grid" aria-label="Dashboard summary">
        <StatsCard label="People saved" value={contactsQuery.isLoading ? "—" : String(totalContacts)} cta="Open contacts" href="/contacts" />
        <StatsCard label="People who can help you" value={contactsQuery.isLoading ? "—" : String(semanticMatches)} tone="success" cta="See suggestions" href="/assistant" />
        <StatsCard label="People to reconnect with" value={contactsQuery.isLoading ? "—" : String(needsFollowUp)} tone="error" cta="Reconnect now" href="/contacts?panel=followups" />
        <StatsCard label="Recent activity" value={contactsQuery.isLoading ? "—" : String(thisWeek)} cta="Open contacts" href="/contacts" />
      </section>

      <section className="dashboard-grid">
        <div className="stack-16">
          {priorityContact ? (
            <HighlightCard
              title="Suggested next person"
              name={priorityContact.name}
              company={priorityContact.company}
              reason="We recommend reaching out to this person."
              badge={priorityContact.status === "inactive" ? "Needs attention" : "High match"}
              detailHref={priorityContact.href}
            />
          ) : (
            <Card className="highlight-card">
              <div className="label">Suggested next person</div>
              <p className="muted no-margin">{contactsQuery.isLoading ? "Loading your people..." : "You have not added anyone yet. Start by adding your first contact."}</p>
            </Card>
          )}

          <Card className="high-value-card">
            <div className="panel-heading">People you may want to reach out to</div>
            {topContacts.length ? (
              <>
                <div className="contact-row contact-row--head" role="row">
                  <div className="contact-row__col">Contact</div>
                  <div className="contact-row__col">Company</div>
                  <div className="contact-row__col">Tags</div>
                  <div className="contact-row__col">Status</div>
                  <div className="contact-row__col">Action</div>
                </div>
                <div className="stack-8" role="table" aria-label="High value contacts list">
                  {topContacts.map((item) => (
                    <ContactRow key={item.id} item={item} />
                  ))}
                </div>
              </>
            ) : (
              <p className="muted no-margin">{contactsQuery.isLoading ? "Loading your people..." : "You have not added anyone yet. Start by adding your first contact."}</p>
            )}
          </Card>
        </div>

        <div className="stack-12 dashboard-secondary">
          <Card className="compact-panel">
            <div className="panel-heading">App status</div>
            <div className="stack-8">
              <Tag tone={contactsQuery.isError ? "error" : "success"}>{contactsQuery.isError ? "Could not load people" : contactsQuery.isLoading ? "Loading" : "Everything looks good"}</Tag>
              <p className="muted no-margin">{contactsQuery.isError ? "Please check your connection and try again." : `You have ${totalContacts} people saved.`}</p>
            </div>
          </Card>

          <Card hover className="compact-panel">
            <div className="panel-heading">Recent updates</div>
            <div className="stack-8">
              {recentActivity.length ? (
                recentActivity.map((event) => (
                  <div key={event.id} className="stack-8">
                    <div className="label">{event.contactName}</div>
                    <p className="muted no-margin">{event.message}</p>
                  </div>
                ))
              ) : (
                <p className="muted no-margin">{contactsQuery.isLoading ? "Loading your people..." : "No recent updates yet."}</p>
              )}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
