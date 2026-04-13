"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../../ui/card";
import { StatsCard } from "../../features/stats-card";
import { ContactRow } from "../../features/contact-row";
import { Input } from "../../ui/input";
import { Tag } from "../../ui/tag";
import { HighlightCard } from "../../features/highlight-card";
import { listContacts } from "../../../lib/api";

const USER_ID = "demo-user-1";

export function DashboardView() {
  const contactsQuery = useQuery({
    queryKey: ["contacts", USER_ID],
    queryFn: () => listContacts(USER_ID)
  });

  const contacts = contactsQuery.data ?? [];
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
          <Input placeholder="Search contacts" aria-label="Search contacts" />
        </div>
        <div className="action-bar__actions">
          <Link className="button button--ghost" href="/add-contact">Add Contact</Link>
          <Link className="button button--primary" href="/assistant">Launch Assistant</Link>
        </div>
      </section>

      <section className="stats-grid" aria-label="Dashboard summary">
        <StatsCard label="Total Contacts" value={contactsQuery.isLoading ? "—" : String(totalContacts)} cta="View contacts" href="/contacts" />
        <StatsCard label="Semantic Matches" value={contactsQuery.isLoading ? "—" : String(semanticMatches)} tone="success" cta="See matches" href="/assistant" />
        <StatsCard label="Needs Follow-up" value={contactsQuery.isLoading ? "—" : String(needsFollowUp)} tone="error" cta="Follow up now" href="/contacts?panel=followups" />
        <StatsCard label="This Week" value={contactsQuery.isLoading ? "—" : String(thisWeek)} cta="Open activity" href="/contacts" />
      </section>

      <section className="dashboard-grid">
        <div className="stack-16">
          {priorityContact ? (
            <HighlightCard
              title="Priority Follow-up"
              name={priorityContact.name}
              company={priorityContact.company}
              reason="Highest priority contact based on backend score."
              badge={priorityContact.status === "inactive" ? "Needs attention" : "High match"}
            />
          ) : (
            <Card className="highlight-card">
              <div className="label">Priority Follow-up</div>
              <p className="muted no-margin">{contactsQuery.isLoading ? "Loading live contacts..." : "No contacts yet. Add one to surface a priority follow-up here."}</p>
            </Card>
          )}

          <Card className="high-value-card">
            <div className="panel-heading">High value contacts</div>
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
              <p className="muted no-margin">{contactsQuery.isLoading ? "Loading live contacts..." : "No contacts yet - add your first contact."}</p>
            )}
          </Card>
        </div>

        <div className="stack-12 dashboard-secondary">
          <Card className="compact-panel">
            <div className="panel-heading">System status</div>
            <div className="stack-8">
              <Tag tone={contactsQuery.isError ? "error" : "success"}>{contactsQuery.isError ? "Contacts API offline" : contactsQuery.isLoading ? "Loading" : "Contacts API live"}</Tag>
              <p className="muted no-margin">{contactsQuery.isError ? "Could not load backend contacts." : `Rendering ${totalContacts} live contacts from the backend.`}</p>
            </div>
          </Card>

          <Card hover className="compact-panel">
            <div className="panel-heading">Activity feed</div>
            <div className="stack-8">
              {recentActivity.length ? (
                recentActivity.map((event) => (
                  <div key={event.id} className="stack-8">
                    <div className="label">{event.contactName}</div>
                    <p className="muted no-margin">{event.message}</p>
                  </div>
                ))
              ) : (
                <p className="muted no-margin">{contactsQuery.isLoading ? "Loading live contacts..." : "No recent activity"}</p>
              )}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
