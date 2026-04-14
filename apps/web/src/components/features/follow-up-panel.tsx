"use client";

import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchFollowUps, markContacted, snoozeFollowUp } from "../../lib/api";
import { Button } from "../ui/button";
import { Tag } from "../ui/tag";

type FollowUpPanelProps = {
  userId?: string;
};

export function FollowUpPanel({ userId = "demo-user-1" }: FollowUpPanelProps) {
  const queryClient = useQueryClient();

  const followUpsQuery = useQuery({
    queryKey: ["followups", userId],
    queryFn: () => fetchFollowUps(userId)
  });

  const contactedMutation = useMutation({
    mutationFn: (contactId: string) => markContacted(userId, contactId),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["followups", userId] });
    }
  });

  const snoozeMutation = useMutation({
    mutationFn: (contactId: string) => snoozeFollowUp(userId, contactId, 7),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["followups", userId] });
    }
  });

  async function copySuggestion(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard failures should not block follow-up usage.
    }
  }

  return (
    <section className="followup-panel" id="followups" aria-labelledby="followup-title">
      <div className="followup-panel__header">
        <div>
          <div className="label">People to reconnect with</div>
          <h3 id="followup-title" className="followup-panel__title">People you have not spoken to in a while</h3>
        </div>
      </div>

      {followUpsQuery.isLoading ? <p className="muted no-margin">Loading suggestions...</p> : null}
      {followUpsQuery.isError ? <p className="error no-margin">Could not load reconnect suggestions.</p> : null}

      {!followUpsQuery.isLoading && !followUpsQuery.isError && (followUpsQuery.data?.length ?? 0) === 0 ? (
        <p className="followup-panel__empty no-margin">You're all caught up! No one needs a follow-up right now.</p>
      ) : null}

      <div className="stack-12">
        {followUpsQuery.data?.map((item) => (
          <article key={item.id} className="followup-item">
            <div className="followup-item__top">
              <strong>{item.name}</strong>
              <Tag tone={item.relevanceScore >= 14 ? "error" : "success"}>Priority {item.relevanceScore}</Tag>
            </div>
            <p className="muted no-margin">Last spoke: {item.lastContacted ? new Date(item.lastContacted).toLocaleDateString() : "No recent conversation"}</p>
            <p className="no-margin">Why now: {item.reason}</p>
            <p className="muted no-margin">Message you can send: {item.suggestion}</p>
            <div className="followup-item__actions">
              <Button
                variant="primary"
                size="small"
                onClick={() => contactedMutation.mutate(item.id)}
                disabled={contactedMutation.isPending || snoozeMutation.isPending}
              >
                Mark as done
              </Button>
              <Button
                variant="ghost"
                size="small"
                onClick={() => snoozeMutation.mutate(item.id)}
                disabled={contactedMutation.isPending || snoozeMutation.isPending}
              >
                Remind me in 7 days
              </Button>
              <Button variant="ghost" size="small" onClick={() => copySuggestion(item.suggestion)}>
                Copy text
              </Button>
              <Link className="button button--ghost button--small" href={`/contacts/id/${item.id}`}>
                View details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
