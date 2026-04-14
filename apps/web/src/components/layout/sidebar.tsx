import Link from "next/link";
import { Tag } from "../ui/tag";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Contacts", href: "/contacts" },
  { label: "Add a person", href: "/add-contact" },
  { label: "Ask for suggestions", href: "/assistant" }
] as const;

type SidebarProps = {
  activeNav?: "dashboard" | "contacts" | "add-contact" | "assistant";
};

export function Sidebar({ activeNav = "dashboard" }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="brand__kicker">People Helper</div>
        <h1 className="brand__title">SCIA</h1>
        <Tag tone="success">Ready to help</Tag>
      </div>

      <nav className="sidebar__nav" aria-label="Sidebar navigation">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            className={`nav-item ${activeNav === item.href.slice(1) || (item.href === "/" && activeNav === "dashboard") ? "is-active" : ""}`}
            href={item.href}
            aria-current={activeNav === item.href.slice(1) || (item.href === "/" && activeNav === "dashboard") ? "page" : undefined}
          >
            <span className="dim">0{index + 1}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="label">Status</div>
        <div className="muted">Suggestions are on and ready when you are.</div>
      </div>
    </aside>
  );
}
