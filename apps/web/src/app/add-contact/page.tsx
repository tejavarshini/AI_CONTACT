import { AppShell } from "../../components/layout/app-shell";
import { Topbar } from "../../components/layout/topbar";
import { AddContactView } from "../../components/pages/add-contact/add-contact-view";

export default function AddContactPage() {
  return (
    <AppShell activeNav="add-contact">
      <Topbar
        label="Add a new person"
        title="Add a new person"
        description="Enter what you know. You can write naturally."
      />
      <AddContactView />
    </AppShell>
  );
}
