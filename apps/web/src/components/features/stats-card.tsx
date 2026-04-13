import Link from "next/link";
import { Card } from "../ui/card";

type StatsCardProps = {
  label: string;
  value: string;
  cta: string;
  onClick?: () => void;
  href?: string;
  tone?: "default" | "success" | "error";
};

export function StatsCard({ label, value, cta, onClick, href, tone = "default" }: StatsCardProps) {
  const cardClass = `stat-card__button ${tone === "error" ? "stat-card__button--urgent" : ""}`.trim();

  return (
    <Card hover className="stat-card">
      {href ? (
        <Link className={cardClass} href={href} aria-label={`${label}: ${value}. ${cta}`}>
          <div className="label">{label}</div>
          <p className={`stat-card__value ${tone === "success" ? "success" : tone === "error" ? "error" : ""}`.trim()}>{value}</p>
          <p className="stat-card__cta">{cta}</p>
        </Link>
      ) : (
        <button type="button" className={cardClass} onClick={onClick} aria-label={`${label}: ${value}. ${cta}`}>
          <div className="label">{label}</div>
          <p className={`stat-card__value ${tone === "success" ? "success" : tone === "error" ? "error" : ""}`.trim()}>{value}</p>
          <p className="stat-card__cta">{cta}</p>
        </button>
      )}
    </Card>
  );
}
