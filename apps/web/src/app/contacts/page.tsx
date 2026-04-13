import { AppShell } from "../../components/layout/app-shell";
import { Topbar } from "../../components/layout/topbar";
import { ContactsView } from "../../components/pages/contacts/contacts-view";

export default function ContactsPage() {
  return (
    <AppShell activeNav="contacts">
      <Topbar
        label="Contacts"
        title="Table-first layout built for scanning and comparing."
        description="This page emphasizes compact rows, filtering, and actions instead of summary cards."
        actionLabel="New contact"
      />
      <ContactsView />
    </AppShell>
  );
}
