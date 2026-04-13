"use client";

import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { AppShell } from "../../../../components/layout/app-shell";
import { Topbar } from "../../../../components/layout/topbar";
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Tag } from "../../../../components/ui/tag";
import { TimelineList } from "../../../../components/features/timeline-list";
import { addContactNote, fetchContactDetail, fetchTimeline, markContacted, snoozeFollowUp } from "../../../../lib/api";
import { FormEvent, useState } from "react";
import { Textarea } from "../../../../components/ui/input";

const USER_ID = "demo-user-1";

export default function ContactTimelinePage() {
  const params = useParams<{ id: string }>();
  const contactId = String(params.id);
  const queryClient = useQueryClient();
  const [note, setNote] = useState("");

  const detailQuery = useQuery({
    queryKey: ["contact-detail", USER_ID, contactId],
    queryFn: () => fetchContactDetail(USER_ID, contactId),
    enabled: Boolean(contactId)
  });

  const timelineQuery = useQuery({
    queryKey: ["timeline", USER_ID, contactId],
    queryFn: () => fetchTimeline(USER_ID, contactId),
    enabled: Boolean(contactId)
  });

  const refresh = () => {
    void queryClient.invalidateQueries({ queryKey: ["contact-detail", USER_ID, contactId] });
    void queryClient.invalidateQueries({ queryKey: ["timeline", USER_ID, contactId] });
    void queryClient.invalidateQueries({ queryKey: ["followups", USER_ID] });
  };

  const contactedMutation = useMutation({
    mutationFn: () => markContacted(USER_ID, contactId),
    onSuccess: refresh
  });

  const snoozeMutation = useMutation({
    mutationFn: () => snoozeFollowUp(USER_ID, contactId, 7),
    onSuccess: refresh
  });

  const noteMutation = useMutation({
    mutationFn: (text: string) => addContactNote(USER_ID, contactId, text),
    onSuccess: () => {
      setNote("");
      refresh();
    }
  });

  function onAddNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = note.trim();
    if (!trimmed) return;
    noteMutation.mutate(trimmed);
  }

  return (
    <AppShell activeNav="contacts">
      <Topbar
        label="Contact Timeline"
        title={detailQuery.data?.name ?? "Contact"}
        description="Review follow-up history and interaction events chronologically."
      />

      <section className="contact-detail-layout">
        <Card className="contact-detail-card">
          {detailQuery.isLoading ? <p className="muted no-margin">Loading contact...</p> : null}
          {detailQuery.isError ? <p className="error no-margin">Could not load this contact.</p> : null}

          {detailQuery.data ? (
            <>
              <div className="label">Company</div>
              <h3 className="contact-detail-card__title">{detailQuery.data.organization ?? "Unknown"}</h3>

              <div className="label">Description</div>
              <p className="contact-detail-card__description">{detailQuery.data.notes ?? "No notes yet."}</p>

              <div className="label">Status</div>
              <div className="flex-wrap gap-8">
                <Tag tone={detailQuery.data.snoozedUntil ? "error" : "success"}>
                  {detailQuery.data.snoozedUntil ? "Snoozed" : "Active"}
                </Tag>
                <Tag>Importance {detailQuery.data.importanceScore}</Tag>
              </div>

              <div className="page-actions">
                <Button onClick={() => contactedMutation.mutate()} disabled={contactedMutation.isPending || snoozeMutation.isPending}>
                  Mark contacted
                </Button>
                <Button variant="ghost" onClick={() => snoozeMutation.mutate()} disabled={contactedMutation.isPending || snoozeMutation.isPending}>
                  Snooze 7d
                </Button>
                <Link className="button button--ghost" href="/contacts">Back to contacts</Link>
              </div>

              <form className="stack-12" onSubmit={onAddNote}>
                <div className="label">Add note</div>
                <Textarea value={note} onChange={(event) => setNote(event.target.value)} rows={4} placeholder="Add context from your latest conversation..." />
                <Button type="submit" disabled={noteMutation.isPending || !note.trim()}>Save note</Button>
              </form>

              <div className="label">Timeline</div>
              {timelineQuery.isLoading ? <p className="muted no-margin">Loading timeline...</p> : null}
              {timelineQuery.isError ? <p className="error no-margin">Could not load timeline.</p> : null}
              {timelineQuery.data ? <TimelineList events={timelineQuery.data} emptyText="No timeline events yet." /> : null}
            </>
          ) : null}
        </Card>
      </section>
    </AppShell>
  );
}
