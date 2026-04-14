import { AppShell } from "../../components/layout/app-shell";
import { Topbar } from "../../components/layout/topbar";
import { ContactsView } from "../../components/pages/contacts/contacts-view";

export default function ContactsPage() {
  return (
    <AppShell activeNav="contacts">
      <Topbar
        label="Contacts"
        title="Your contacts"
        description="Browse, search, and manage the people you know."
        actionLabel="Add a new person"
      />
      <ContactsView />
    </AppShell>
  );
}
