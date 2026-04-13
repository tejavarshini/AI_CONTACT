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
  FRONTEND_URL: z.string().default("http://localhost:3000"),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  AI_PROVIDER: z.enum(["ollama", "mock"]).default("ollama"),
  OLLAMA_BASE_URL: z.string().default("http://localhost:11434"),
  OLLAMA_CHAT_MODEL: z.string().default("llama3.1:8b"),
  OLLAMA_EMBED_MODEL: z.string().default("nomic-embed-text"),
  EMBEDDING_DIM: z.coerce.number().int().positive().default(1536)
});

export const env = envSchema.parse(process.env);
