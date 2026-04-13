import Link from "next/link";
import { Avatar } from "../../ui/avatar";
import { Tag } from "../../ui/tag";
import type { ContactDetail } from "../../../lib/api";

type ContactsTableProps = {
  contacts: ContactDetail[];
  isLoading?: boolean;
  isError?: boolean;
};

export function ContactsTable({ contacts, isLoading = false, isError = false }: ContactsTableProps) {
  return (
    <section className="contacts-table" aria-labelledby="contacts-table-title">
      <div className="contacts-table__header">
        <div>
          <div className="label">Contacts</div>
          <h3 id="contacts-table-title" className="contacts-table__title">List view with filters and row actions</h3>
        </div>
        <div className="contacts-table__actions">
          <Tag>All</Tag>
          <Tag tone="success">Active</Tag>
          <Tag tone="error">Inactive</Tag>
        </div>
      </div>

      <div className="contacts-table__table" role="table" aria-label="Contacts table">
        <div className="contacts-table__row contacts-table__row--head" role="row">
          <span role="columnheader">Contact</span>
          <span role="columnheader">Company</span>
          <span role="columnheader">Last contacted</span>
          <span role="columnheader">Status</span>
          <span role="columnheader">Actions</span>
        </div>

        {isLoading ? (
          <div className="contacts-table__row" role="row">
            <div role="cell" className="muted">Loading contacts...</div>
          </div>
        ) : null}

        {isError ? (
          <div className="contacts-table__row" role="row">
            <div role="cell" className="error">Could not load contacts.</div>
          </div>
        ) : null}

        {!isLoading && !isError && contacts.length === 0 ? (
          <div className="contacts-table__row" role="row">
            <div role="cell" className="muted">No contacts yet. Save one from Add Contact to see it here.</div>
          </div>
        ) : null}

        {contacts.map((contact) => (
          <div key={contact.id} className="contacts-table__row" role="row">
            <div className="contacts-table__contact" role="cell">
              <Avatar name={contact.name} />
              <div>
                <div className="contacts-table__name">{contact.name}</div>
                <div className="contacts-table__note">{contact.notes ?? "No notes yet"}</div>
              </div>
            </div>
            <div role="cell">{contact.organization ?? "—"}</div>
            <div role="cell">{contact.lastContacted ? new Date(contact.lastContacted).toLocaleDateString() : "Never"}</div>
            <div role="cell">
              <Tag tone={contact.snoozedUntil ? "error" : "success"}>{contact.snoozedUntil ? "snoozed" : "active"}</Tag>
            </div>
            <div role="cell">
              <Link className="button button--primary button--small" href={`/contacts/id/${contact.id}`} aria-label={`Open ${contact.name}`}>
                Open
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
