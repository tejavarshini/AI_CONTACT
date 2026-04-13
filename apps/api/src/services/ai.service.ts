import { z } from "zod";
import { env } from "../lib/env.js";
import type { StructuredContact } from "./types.js";

const structuredContactSchema = z.object({
  name: z.string().min(1),
  organization: z.string().optional(),
  roleTitle: z.string().optional(),
  sourceContext: z.string().optional(),
  howCanHelp: z.string().optional(),
  notes: z.string().optional(),
  tags: z.array(z.string()).default([]),
  domains: z.array(z.string()).default([]),
  skills: z.array(z.string()).default([])
});

function pickName(input: string): string {
  const metMatch = input.match(/met\s+([A-Z][a-zA-Z]+)/i);
  if (metMatch?.[1]) return metMatch[1];

  const nameMatch = input.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
  return nameMatch?.[1] ?? "Unknown";
}

function extractKeywords(input: string, candidates: string[]): string[] {
  const text = input.toLowerCase();
  return candidates.filter((word) => text.includes(word.toLowerCase()));
}

function mockExtractContactFromText(input: string): StructuredContact {
  const organization = input.match(/works?\s+at\s+([A-Za-z0-9 .&-]+)/i)?.[1]?.trim();
  const roleTitle = input.match(/as\s+(an?\s+)?([A-Za-z ]+)/i)?.[2]?.trim();
  const sourceContext = input.match(/at\s+([A-Za-z0-9 .&-]+)/i)?.[1]?.trim();
  const howCanHelp = input.match(/helps?\s+with\s+([A-Za-z0-9 ,&-]+)/i)?.[1]?.trim();

  return {
    name: pickName(input),
    organization,
    roleTitle,
    sourceContext,
    howCanHelp,
    notes: input,
    tags: extractKeywords(input, ["referrals", "internship", "ai", "hr", "founder", "networking"]),
    domains: extractKeywords(input, ["ai", "web", "backend", "frontend", "product", "data"]),
    skills: extractKeywords(input, ["referrals", "hiring", "mentoring", "react", "node", "python"])
  };
}

function extractFirstJsonObject(text: string): string {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return "{}";
  return text.slice(start, end + 1);
}

async function callOllamaChat(prompt: string): Promise<string> {
  const response = await fetch(`${env.OLLAMA_BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: env.OLLAMA_CHAT_MODEL,
      format: "json",
      stream: false,
      messages: [
        {
          role: "system",
          content:
            "You are an information extraction system. Return only JSON with keys: name, organization, roleTitle, sourceContext, howCanHelp, notes, tags, domains, skills. Keep arrays short."
        },
        { role: "user", content: prompt }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`Ollama chat failed with status ${response.status}`);
  }

  const json = (await response.json()) as { message?: { content?: string } };
  return json.message?.content ?? "{}";
}

function normalizeEmbedding(values: number[], size: number): number[] {
  if (values.length === size) return values;
  if (values.length > size) return values.slice(0, size);
  return [...values, ...new Array(size - values.length).fill(0)];
}

function mockEmbedding(text: string, size: number): number[] {
  const output = new Array(size).fill(0);
  for (let i = 0; i < text.length; i += 1) {
    const index = i % size;
    output[index] += (text.charCodeAt(i) % 31) / 31;
  }
  return output.map((n) => Number((n / 3).toFixed(6)));
}

async function callOllamaEmbedding(input: string): Promise<number[]> {
  const response = await fetch(`${env.OLLAMA_BASE_URL}/api/embeddings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: env.OLLAMA_EMBED_MODEL, prompt: input })
  });

  if (!response.ok) {
    throw new Error(`Ollama embeddings failed with status ${response.status}`);
  }

  const json = (await response.json()) as { embedding?: number[] };
  if (!json.embedding || json.embedding.length === 0) {
    throw new Error("Ollama returned an empty embedding");
  }

  return normalizeEmbedding(json.embedding, env.EMBEDDING_DIM);
}

export async function extractContactFromText(input: string): Promise<StructuredContact> {
  if (env.AI_PROVIDER === "mock") {
    return mockExtractContactFromText(input);
  }

  try {
    const raw = await callOllamaChat(input);
    const parsed = structuredContactSchema.parse(JSON.parse(extractFirstJsonObject(raw)));
    return parsed;
  } catch {
    // Fallback keeps capture route usable without external credits or local model readiness.
    return mockExtractContactFromText(input);
  }
}

export async function embedText(input: string): Promise<number[]> {
  if (env.AI_PROVIDER === "mock") {
    return mockEmbedding(input, env.EMBEDDING_DIM);
  }

  try {
    return await callOllamaEmbedding(input);
  } catch {
    return mockEmbedding(input, env.EMBEDDING_DIM);
  }
}
