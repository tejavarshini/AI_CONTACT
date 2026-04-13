import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Tag } from "../ui/tag";

type ContactDetailHeroProps = {
  name: string;
  company: string;
  context: string;
};

export function ContactDetailHero({ name, company, context }: ContactDetailHeroProps) {
  return (
    <section className="contact-detail-hero">
      <Avatar name={name} size={58} />
      <div className="stack-8">
        <div className="label">Contact detail</div>
        <h3 className="contact-detail-hero__name">{name}</h3>
        <p className="muted no-margin">{company}</p>
        <div className="flex-wrap gap-8">
          <Tag>{context}</Tag>
          <Tag tone="success">Referrals</Tag>
        </div>
      </div>
      <Button variant="ghost" size="small">
        Edit contact
      </Button>
    </section>
  );
}
