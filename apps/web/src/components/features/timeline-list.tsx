import type { TimelineEvent } from "../../lib/api";

type TimelineListProps = {
  events: TimelineEvent[];
  emptyText?: string;
};

function formatTimeLabel(value: string) {
  const date = new Date(value);
  return date.toLocaleString();
}

export function TimelineList({ events, emptyText = "No events yet." }: TimelineListProps) {
  if (events.length === 0) {
    return <p className="muted no-margin">{emptyText}</p>;
  }

  return (
    <ol className="timeline-list" aria-label="Contact timeline">
      {events.map((event) => (
        <li key={event.id} className="timeline-item">
          <div className="timeline-item__dot" aria-hidden="true" />
          <div className="timeline-item__content">
            <div className="timeline-item__meta">{formatTimeLabel(event.createdAt)} • {event.type}</div>
            <p className="timeline-item__message">{event.message}</p>
            {event.reason ? <p className="muted no-margin">Reason: {event.reason}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
