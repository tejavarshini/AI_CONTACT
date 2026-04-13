import { Router } from "express";
import { z } from "zod";
import {
  addContactNote,
  captureContact,
  createContact,
  getDashboardSummary,
  getContactById,
  getFollowUps,
  getTimeline,
  listContacts,
  markContacted,
  searchContacts,
  snoozeContact
} from "../services/contact.service.js";

const captureSchema = z.object({
  userId: z.string().min(1),
  input: z.string().min(1)
});

const createSchema = z.object({
  userId: z.string().min(1),
  name: z.string().min(1),
  organization: z.string().trim().optional(),
  roleTitle: z.string().trim().optional(),
  sourceContext: z.string().trim().optional(),
  howCanHelp: z.string().trim().optional(),
  notes: z.string().trim().optional(),
  tags: z.array(z.string()).default([]),
  domains: z.array(z.string()).default([]),
  skills: z.array(z.string()).default([]),
  rawInput: z.string().trim().optional()
});

const searchSchema = z.object({
  userId: z.string().min(1),
  query: z.string().min(1),
  limit: z.coerce.number().int().positive().max(20).optional()
});

const followUpSchema = z.object({
  userId: z.string().min(1),
  daysInactive: z.coerce.number().int().positive().max(365).optional()
});

const listSchema = z.object({
  userId: z.string().min(1)
});

const summarySchema = z.object({
  userId: z.string().min(1)
});

const contactParamsSchema = z.object({
  id: z.string().min(1)
});

const userQuerySchema = z.object({
  userId: z.string().min(1)
});

const contactedSchema = z.object({
  userId: z.string().min(1)
});

const snoozeSchema = z.object({
  userId: z.string().min(1),
  days: z.coerce.number().int().positive().max(60).optional()
});

const noteSchema = z.object({
  userId: z.string().min(1),
  note: z.string().min(1)
});

export const contactRouter = Router();

contactRouter.post("/", async (req, res) => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid payload", details: parsed.error.flatten() });
  }

  try {
    const contact = await createContact(parsed.data.userId, parsed.data);
    return res.status(201).json({ contact });
  } catch (error) {
    return res.status(500).json({ error: "Contact create failed", details: String(error) });
  }
});

contactRouter.post("/capture", async (req, res) => {
  const parsed = captureSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid payload", details: parsed.error.flatten() });
  }

  try {
    const contact = await captureContact(parsed.data.userId, parsed.data.input);
    return res.status(201).json({ contact });
  } catch (error) {
    return res.status(500).json({ error: "Contact capture failed", details: String(error) });
  }
});

contactRouter.get("/search", async (req, res) => {
  const parsed = searchSchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid query", details: parsed.error.flatten() });
  }

  try {
    const results = await searchContacts(parsed.data.userId, parsed.data.query, parsed.data.limit ?? 8);
    return res.status(200).json({ results });
  } catch (error) {
    return res.status(500).json({ error: "Search failed", details: String(error) });
  }
});

contactRouter.get("/followups", async (req, res) => {
  const parsed = followUpSchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid query", details: parsed.error.flatten() });
  }

  try {
    const suggestions = await getFollowUps(parsed.data.userId, parsed.data.daysInactive ?? 60);
    return res.status(200).json({ suggestions });
  } catch (error) {
    return res.status(500).json({ error: "Follow-up generation failed", details: String(error) });
  }
});

contactRouter.get("/list", async (req, res) => {
  const parsed = listSchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid query", details: parsed.error.flatten() });
  }

  try {
    const contacts = await listContacts(parsed.data.userId);
    return res.status(200).json({ contacts });
  } catch (error) {
    return res.status(500).json({ error: "Contact list failed", details: String(error) });
  }
});

contactRouter.get("/summary", async (req, res) => {
  const parsed = summarySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid query", details: parsed.error.flatten() });
  }

  try {
    const summary = await getDashboardSummary(parsed.data.userId);
    return res.status(200).json({ summary });
  } catch (error) {
    return res.status(500).json({ error: "Dashboard summary failed", details: String(error) });
  }
});

contactRouter.get("/:id", async (req, res) => {
  const paramsParsed = contactParamsSchema.safeParse(req.params);
  const queryParsed = userQuerySchema.safeParse(req.query);
  if (!paramsParsed.success || !queryParsed.success) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const contact = await getContactById(queryParsed.data.userId, paramsParsed.data.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    return res.status(200).json({ contact });
  } catch (error) {
    return res.status(500).json({ error: "Contact detail failed", details: String(error) });
  }
});

contactRouter.get("/:id/timeline", async (req, res) => {
  const paramsParsed = contactParamsSchema.safeParse(req.params);
  const queryParsed = userQuerySchema.safeParse(req.query);
  if (!paramsParsed.success || !queryParsed.success) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const events = await getTimeline(queryParsed.data.userId, paramsParsed.data.id);
    return res.status(200).json({ events });
  } catch (error) {
    return res.status(500).json({ error: "Timeline fetch failed", details: String(error) });
  }
});

contactRouter.post("/:id/contacted", async (req, res) => {
  const paramsParsed = contactParamsSchema.safeParse(req.params);
  const bodyParsed = contactedSchema.safeParse(req.body);
  if (!paramsParsed.success || !bodyParsed.success) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const contact = await markContacted(bodyParsed.data.userId, paramsParsed.data.id);
    return res.status(200).json({ contact });
  } catch (error) {
    return res.status(500).json({ error: "Mark contacted failed", details: String(error) });
  }
});

contactRouter.post("/:id/snooze", async (req, res) => {
  const paramsParsed = contactParamsSchema.safeParse(req.params);
  const bodyParsed = snoozeSchema.safeParse(req.body);
  if (!paramsParsed.success || !bodyParsed.success) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const contact = await snoozeContact(bodyParsed.data.userId, paramsParsed.data.id, bodyParsed.data.days ?? 7);
    return res.status(200).json({ contact });
  } catch (error) {
    return res.status(500).json({ error: "Snooze failed", details: String(error) });
  }
});

contactRouter.post("/:id/notes", async (req, res) => {
  const paramsParsed = contactParamsSchema.safeParse(req.params);
  const bodyParsed = noteSchema.safeParse(req.body);
  if (!paramsParsed.success || !bodyParsed.success) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const contact = await addContactNote(bodyParsed.data.userId, paramsParsed.data.id, bodyParsed.data.note);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    return res.status(200).json({ contact });
  } catch (error) {
    return res.status(500).json({ error: "Add note failed", details: String(error) });
  }
});
