"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { ContactsTable } from "./contacts-table";
import { FollowUpPanel } from "../../features/follow-up-panel";
import { listContacts } from "../../../lib/api";

const USER_ID = "demo-user-1";

export function ContactsView() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const contactsQuery = useQuery({
    queryKey: ["contacts", USER_ID],
    queryFn: () => listContacts(USER_ID)
  });
  const isFollowupsOpen = searchParams.get("panel") === "followups";
  const [followupsOpen, setFollowupsOpen] = useState(isFollowupsOpen);

  useEffect(() => {
    setFollowupsOpen(isFollowupsOpen);
  }, [isFollowupsOpen]);

  useEffect(() => {
    if (window.location.hash === "#followups" && !isFollowupsOpen) {
      openFollowups();
    }
    // Keep the page from scrolling behind the drawer when it is open.
    document.body.style.overflow = followupsOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [followupsOpen, isFollowupsOpen]);

  function updateFollowups(open: boolean) {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (open) {
      nextParams.set("panel", "followups");
    } else {
      nextParams.delete("panel");
    }

    const query = nextParams.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function openFollowups() {
    updateFollowups(true);
  }

  function closeFollowups() {
    updateFollowups(false);
  }

  return (
    <div className="stack-16">
      <section className="page-hero page-hero--compact">
        <div>
          <div className="label">Contacts</div>
          <h3 className="page-hero__title">Your contacts</h3>
          <p className="page-hero__meta">
            Browse, search, and manage the people you know.
          </p>
        </div>
        <div className="action-bar__actions">
          <Button variant="ghost" size="small" onClick={openFollowups}>
            People to reconnect with
          </Button>
          <Link className="button button--primary" href="/add-contact">Add a new person</Link>
        </div>
      </section>

      {followupsOpen ? <button type="button" className="contacts-layout__backdrop is-open" aria-label="Close follow-ups panel" onClick={closeFollowups} /> : null}

      <section className="contacts-layout">
        <Card className="page-surface page-surface--table contacts-layout__contacts">
          <ContactsTable contacts={contactsQuery.data ?? []} isLoading={contactsQuery.isLoading} isError={contactsQuery.isError} />
        </Card>
        <Card className={`page-surface contacts-layout__followups contacts-layout__drawer ${followupsOpen ? "is-open" : ""}`.trim()} aria-hidden={!followupsOpen}>
          <div className="contacts-layout__drawer-header">
            <Button variant="ghost" size="small" onClick={closeFollowups} aria-label="Close follow-ups panel">
              <span aria-hidden="true">←</span>
              Back
            </Button>
            <div className="contacts-layout__drawer-title">People to reconnect with</div>
          </div>
          <FollowUpPanel />
        </Card>
      </section>
    </div>
  );
}
