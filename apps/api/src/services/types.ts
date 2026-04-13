export type StructuredContact = {
  name: string;
  organization?: string;
  roleTitle?: string;
  sourceContext?: string;
  howCanHelp?: string;
  notes?: string;
  tags: string[];
  domains: string[];
  skills: string[];
};

export type CreateContactInput = {
  userId: string;
  name: string;
  organization?: string;
  roleTitle?: string;
  sourceContext?: string;
  howCanHelp?: string;
  notes?: string;
  tags: string[];
  domains: string[];
  skills: string[];
  rawInput?: string;
};

export type RankedContactResult = {
  id: string;
  name: string;
  organization: string | null;
  roleTitle: string | null;
  sourceContext: string | null;
  howCanHelp: string | null;
  tags: string[];
  domains: string[];
  skills: string[];
  lastContacted: string | null;
  similarity: number;
  reasons: string[];
};

export type FollowUpItem = {
  id: string;
  name: string;
  lastContacted: string | null;
  reason: string;
  relevanceScore: number;
  suggestion: string;
};

export type ContactSummary = {
  id: string;
  name: string;
  organization: string | null;
  roleTitle: string | null;
  sourceContext: string | null;
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

export type DashboardSummary = {
  stats: {
    totalContacts: number;
    semanticMatches: number;
    needsFollowUp: number;
    thisWeek: number;
  };
  priorityContact: DashboardContact | null;
  priorityReason: string | null;
  topContacts: DashboardContact[];
  recentActivity: DashboardActivity[];
  systemStatus: {
    api: "ok";
    aiProvider: string;
  };
};

export type TimelineEvent = {
  id: string;
  contactId: string;
  type: string;
  reason: string | null;
  message: string;
  createdAt: string;
};
