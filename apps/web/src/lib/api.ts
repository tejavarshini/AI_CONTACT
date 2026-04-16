export type CaptureContactPayload = {
  userId: string;
  input: string;
};

export type CreateContactPayload = {
  userId: string;
  name: string;
  organization?: string;
  howCanHelp?: string;
  notes?: string;
  tags: string[];
  domains: string[];
  skills: string[];
  rawInput: string;
};

export type SearchResult = {
  id: string;
  name: string;
  organization: string | null;
  roleTitle: string | null;
  sourceContext: string | null;
  howCanHelp: string | null;
  similarity: number;
  reasons: string[];
};

export type FollowUpSuggestion = {
  id: string;
  name: string;
  suggestion: string;
  lastContacted: string | null;
  reason: string;
  relevanceScore: number;
};

export type ContactDetail = {
  id: string;
  name: string;
  organization: string | null;
  roleTitle: string | null;
  sourceContext: string | null;
  howCanHelp: string | null;
  rawInput: string;
  notes: string | null;
  tags: string[];
  lastContacted: string | null;
  snoozedUntil: string | null;
  importanceScore: number;
  createdAt: string;
  updatedAt: string;
};

export type DashboardContact = {
  id: string;
  name: string;
  company: string;
  note: string;
  tags: string[];
  status: "active" | "inactive";
  href: string;
};

export type DashboardActivity = {
  id: string;
  contactId: string;
  contactName: string;
  type: string;
  message: string;
  createdAt: string;
};

export type TimelineEvent = {
  id: string;
  contactId: string;
  type: string;
  reason: string | null;
  message: string;
  createdAt: string;
};

function getApiUrl(): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured");
  }

  return apiUrl;
}

export async function captureContact(payload: CaptureContactPayload) {
  const response = await fetch(`${getApiUrl()}/api/contacts/capture`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to capture contact");
  }

  const data = await response.json();
  return data.contact;
}

export async function createContact(payload: CreateContactPayload) {
  const response = await fetch(`${getApiUrl()}/api/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to create contact");
  }

  const data = await response.json();
  return data.contact;
}

export async function semanticSearch(userId: string, query: string) {
  const searchParams = new URLSearchParams({ userId, query });
  const response = await fetch(`${getApiUrl()}/api/contacts/search?${searchParams.toString()}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Search failed");
  }

  const data = await response.json();
  return data.results as SearchResult[];
}

export async function fetchFollowUps(userId: string, daysInactive = 14) {
  const searchParams = new URLSearchParams({ userId, daysInactive: String(daysInactive) });
  const response = await fetch(`${getApiUrl()}/api/contacts/followups?${searchParams.toString()}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Follow-up fetch failed");
  }

  const data = await response.json();
  return data.suggestions as FollowUpSuggestion[];
}

export async function listContacts(userId: string) {
  const searchParams = new URLSearchParams({ userId });
  const response = await fetch(`${getApiUrl()}/api/contacts/list?${searchParams.toString()}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Contact list failed");
  }

  const data = await response.json();
  return data.contacts as ContactDetail[];
}

export async function markContacted(userId: string, contactId: string) {
  const response = await fetch(`${getApiUrl()}/api/contacts/${contactId}/contacted`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId })
  });

  if (!response.ok) {
    throw new Error("Failed to mark contact as contacted");
  }

  return response.json();
}

export async function snoozeFollowUp(userId: string, contactId: string, days = 7) {
  const response = await fetch(`${getApiUrl()}/api/contacts/${contactId}/snooze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, days })
  });

  if (!response.ok) {
    throw new Error("Failed to snooze follow-up");
  }

  return response.json();
}

export async function fetchTimeline(userId: string, contactId: string) {
  const params = new URLSearchParams({ userId });
  const response = await fetch(`${getApiUrl()}/api/contacts/${contactId}/timeline?${params.toString()}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch timeline");
  }

  const data = await response.json();
  return data.events as TimelineEvent[];
}

export async function fetchContactDetail(userId: string, contactId: string) {
  const params = new URLSearchParams({ userId });
  const response = await fetch(`${getApiUrl()}/api/contacts/${contactId}?${params.toString()}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch contact detail");
  }

  const data = await response.json();
  return data.contact as ContactDetail;
}

export async function addContactNote(userId: string, contactId: string, note: string) {
  const response = await fetch(`${getApiUrl()}/api/contacts/${contactId}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, note })
  });

  if (!response.ok) {
    throw new Error("Failed to add note");
  }

  return response.json();
}
