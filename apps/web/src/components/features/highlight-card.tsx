import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Tag } from "../ui/tag";

type HighlightCardProps = {
  title: string;
  name: string;
  company: string;
  reason: string;
  badge?: string;
};

export function HighlightCard({ title, name, company, reason, badge }: HighlightCardProps) {
  return (
    <section className="highlight-card" aria-labelledby="highlight-title">
      <div className="highlight-card__head">
        <div>
          <div className="label">{title}</div>
          <h3 id="highlight-title" className="highlight-card__title">{name}</h3>
          <p className="muted no-margin">{company}</p>
        </div>
        {badge ? <Tag tone="success">{badge}</Tag> : null}
      </div>

      <div className="highlight-card__body">
        <Avatar name={name} size={58} />
        <p className="highlight-card__reason">Why this person: {reason}</p>
      </div>

      <div className="highlight-card__actions">
        <Button variant="ghost">View details</Button>
        <Button>Reconnect now</Button>
      </div>
    </section>
  );
}
