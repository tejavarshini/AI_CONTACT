import { AppShell } from "../components/layout/app-shell";
import { Topbar } from "../components/layout/topbar";
import { DashboardView } from "../components/pages/dashboard/dashboard-view";

export default function HomePage() {
  return (
    <AppShell activeNav="dashboard">
      <Topbar
        label="Dashboard"
        title="A summary-first view for network intelligence."
        description="Start by adding contacts or ask AI who can help you. Then use this overview to decide your next action quickly."
        actionLabel="Export data"
      />
      <DashboardView />
    </AppShell>
  );
}
