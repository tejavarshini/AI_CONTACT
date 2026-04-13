import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { Tag } from "../ui/tag";

export type ContactRowItem = {
  name: string;
  company: string;
  note: string;
  tags?: readonly string[];
  status?: "active" | "inactive";
  href: string;
};

type ContactRowProps = {
  item: ContactRowItem;
};

export function ContactRow({ item }: ContactRowProps) {
  return (
    <div className="contact-row" role="row">
      <div className="contact-row__col contact-row__identity" role="cell">
        <Avatar name={item.name} />
        <div>
          <h3 className="contact-row__title">{item.name}</h3>
          <p className="contact-row__meta">{item.note}</p>
        </div>
      </div>

      <div className="contact-row__col" role="cell">
        <p className="contact-row__company">{item.company}</p>
      </div>

      <div className="contact-row__col contact-row__tags" role="cell">
        {(item.tags ?? []).slice(0, 2).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="contact-row__col" role="cell">
        <Tag tone={item.status === "inactive" ? "error" : "success"}>{item.status ?? "active"}</Tag>
      </div>

      <div className="contact-row__col contact-row__action" role="cell">
        <Link className="button button--primary button--small" href={item.href} aria-label={`Open ${item.name}`}>
          Open
        </Link>
      </div>
    </div>
  );
}
