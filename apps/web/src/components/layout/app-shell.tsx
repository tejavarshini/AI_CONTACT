import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { MainContent } from "./main-content";

type AppShellProps = {
  children: ReactNode;
  activeNav?: "dashboard" | "contacts" | "add-contact" | "assistant";
};

export function AppShell({ children, activeNav = "dashboard" }: AppShellProps) {
  return (
    <div className="app-shell theme-shell">
      <Sidebar activeNav={activeNav} />
      <div>
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
}
