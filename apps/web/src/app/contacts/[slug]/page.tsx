import Link from "next/link";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { AppShell } from "../../../components/layout/app-shell";
import { Topbar } from "../../../components/layout/topbar";
import { Card } from "../../../components/ui/card";
import { Tag } from "../../../components/ui/tag";
import { TimelineList } from "../../../components/features/timeline-list";

type ContactDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ContactDetailPage({ params }: ContactDetailPageProps) {
  await params;
  redirect("/contacts");
}
