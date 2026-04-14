import { AppShell } from "../components/layout/app-shell";
import { Topbar } from "../components/layout/topbar";
import { DashboardView } from "../components/pages/dashboard/dashboard-view";

export default function HomePage() {
  return (
    <AppShell activeNav="dashboard">
      <Topbar
        label="Dashboard"
        title="Your network at a glance"
        description="Add people, then ask who can help you. We will guide your next step."
        actionLabel="See all people"
      />
      <DashboardView />
    </AppShell>
  );
}
