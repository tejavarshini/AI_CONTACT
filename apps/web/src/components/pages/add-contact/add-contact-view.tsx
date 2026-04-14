"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input, Textarea } from "../../ui/input";
import { Tag } from "../../ui/tag";
import { createContact } from "../../../lib/api";

export function AddContactView() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [howCanHelp, setHowCanHelp] = useState("");
  const [tags, setTags] = useState("referrals");
  const [note, setNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const trimmedHowCanHelp = howCanHelp.trim();
    const trimmedTags = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    const trimmedNote = note.trim();

    if (!trimmedName) {
      setError("Add a name before saving.");
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      const contact = await createContact({
        userId: "demo-user-1",
        name: trimmedName,
        organization: trimmedCompany || undefined,
        howCanHelp: trimmedHowCanHelp || undefined,
        notes: trimmedNote || undefined,
        tags: trimmedTags.length > 0 ? trimmedTags : ["referrals"],
        domains: [],
        skills: [],
        rawInput: [
          trimmedName,
          trimmedCompany ? `works at ${trimmedCompany}` : null,
          trimmedHowCanHelp ? `can help with ${trimmedHowCanHelp}` : null,
          trimmedTags.length > 0 ? `tags: ${trimmedTags.join(", ")}` : null,
          trimmedNote ? `note: ${trimmedNote}` : null
        ]
          .filter(Boolean)
          .join(". ")
      });

      void queryClient.invalidateQueries({ queryKey: ["contacts", "demo-user-1"] });

      router.push(`/contacts/id/${contact.id}`);
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Failed to save contact.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="add-contact-layout" aria-labelledby="add-contact-title">
      <div className="add-contact-layout__intro">
        <div className="label">Add a new person</div>
        <h3 id="add-contact-title" className="add-contact-layout__title">Add a new person</h3>
        <p className="add-contact-layout__meta">
          Enter what you know. You can write naturally.
        </p>
        <div className="flex-wrap gap-8">
          <Tag tone="success">Simple and quick</Tag>
          <Tag>Friendly form</Tag>
          <Tag>Saves instantly</Tag>
        </div>
      </div>

      <Card className="page-surface page-surface--form">
        <div className="stack-16">
          <div className="stack-8">
            <div className="label">Details</div>
            <h4 className="form-block__title">Do not worry about perfect details - just write what you remember.</h4>
          </div>

          <form className="stack-12" onSubmit={handleSubmit}>
            <Input placeholder="Person's name" aria-label="Person's name" value={name} onChange={(event) => setName(event.target.value)} />
            <Input placeholder="Where do they work?" aria-label="Where do they work" value={company} onChange={(event) => setCompany(event.target.value)} />
            <Input
              placeholder="How can this person help you?"
              aria-label="How can this person help you"
              value={howCanHelp}
              onChange={(event) => setHowCanHelp(event.target.value)}
            />
            <Input
              placeholder="Tags (e.g., referrals, hiring)"
              aria-label="Tags"
              value={tags}
              onChange={(event) => setTags(event.target.value)}
            />
            <Textarea
              rows={6}
              placeholder="Example: Met at a hackathon, works at Amazon, can help with referrals"
              aria-label="Natural language note"
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
            {error ? <p className="error no-margin">{error}</p> : null}
            <div className="page-actions">
              <Button variant="ghost" type="button" onClick={() => router.push("/contacts")}>
                Go back
              </Button>
              <Button type="submit" disabled={isSaving}>
                {isSaving ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
}
