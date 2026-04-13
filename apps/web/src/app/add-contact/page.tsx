import { AppShell } from "../../components/layout/app-shell";
import { Topbar } from "../../components/layout/topbar";
import { AddContactView } from "../../components/pages/add-contact/add-contact-view";

export default function AddContactPage() {
  return (
    <AppShell activeNav="add-contact">
      <Topbar
        label="Add Contact"
        title="Focused form layout for quick structured capture."
        description="This screen reduces visual noise so the form feels fast, deliberate, and simple to complete."
      />
      <AddContactView />
    </AppShell>
  );
}
