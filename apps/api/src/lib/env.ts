import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import { z } from "zod";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(currentDir, "../../../../");

dotenv.config({ path: path.join(repoRoot, "packages", "db", ".env") });
dotenv.config();

const envSchema = z.object({
  API_PORT: z.coerce.number().default(4000),
  FRONTEND_URL: z.string().url("FRONTEND_URL must be a valid URL"),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  AI_PROVIDER: z.enum(["ollama", "mock"]).default("ollama"),
  OLLAMA_BASE_URL: z.string().url("OLLAMA_BASE_URL must be a valid URL").optional(),
  OLLAMA_CHAT_MODEL: z.string().min(1).optional(),
  OLLAMA_EMBED_MODEL: z.string().min(1).optional(),
  EMBEDDING_DIM: z.coerce.number().int().positive().default(1536)
});

const parsedEnv = envSchema.parse(process.env);

if (parsedEnv.AI_PROVIDER === "ollama") {
  if (!parsedEnv.OLLAMA_BASE_URL) {
    throw new Error("OLLAMA_BASE_URL is required when AI_PROVIDER=ollama");
  }

  if (!parsedEnv.OLLAMA_CHAT_MODEL) {
    throw new Error("OLLAMA_CHAT_MODEL is required when AI_PROVIDER=ollama");
  }

  if (!parsedEnv.OLLAMA_EMBED_MODEL) {
    throw new Error("OLLAMA_EMBED_MODEL is required when AI_PROVIDER=ollama");
  }
}

export const env = parsedEnv;
