import { Button } from "../ui/button";
import type { ReactNode } from "react";

type TopbarProps = {
  label: string;
  title: string;
  description: string;
  actionLabel?: string;
  action?: ReactNode;
};

export function Topbar({ label, title, description, actionLabel, action }: TopbarProps) {
  return (
    <header className="topbar">
      <div>
        <div className="label">{label}</div>
        <h2 className="topbar__title">{title}</h2>
        <p className="topbar__meta">{description}</p>
      </div>
      {action ?? (actionLabel ? <Button variant="ghost" size="small">{actionLabel}</Button> : null)}
    </header>
  );
}
