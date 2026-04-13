# Smart Contact Intelligence Assistant (SCIA)

SCIA is an end-to-end MVP that turns unstructured networking notes into searchable relationship intelligence.

## Stack

- Frontend: Next.js + React Query
- Backend: Node.js (Express modular monolith)
- Database: PostgreSQL + pgvector via Prisma
- AI: Ollama local models (free) + automatic mock fallback
- Optional async infra: Redis (BullMQ-ready)

## Monorepo Structure

- `apps/web`: Chat-style UI for capture, semantic search, and follow-up cards
- `apps/api`: Contact capture, structuring, embedding, ranking, explainability APIs
- `packages/db`: Prisma schema and shared DB client
- `infra`: Local Docker services (Postgres + Redis)

## Functional Coverage (PRD Mapping)

- FR1 Add contact via text (voice-to-text can be plugged in at UI layer)
- FR2 AI extracts structured profile from natural language input
- FR3 Embeddings stored in pgvector column
- FR4 Query using natural language
- FR5 Ranked semantic search results
- FR6 Explainable reasons for each result
- FR7 Inactivity-based follow-up suggestions

## Quick Start

1. Install dependencies:
   - `npm install`
2. Start infra:
   - `docker compose -f infra/docker-compose.yml up -d`
3. Configure environment:
   - Copy `.env.example` to `.env`
4. Install and start Ollama (free local AI):
   - Install from `https://ollama.com/download`
   - Pull models:
     - `ollama pull llama3.1:8b`
     - `ollama pull nomic-embed-text`
   - Start Ollama server (usually auto-starts on install)
5. Generate Prisma client:
   - `npm run db:generate`
6. Run DB migration:
   - `npm run db:migrate`
7. Start app:
   - `npm run dev`

Frontend: `http://localhost:3000`

Backend: `http://localhost:4000`

## API Endpoints

- `POST /api/contacts/capture`
  - body: `{ "userId": "demo-user-1", "input": "Met Rahul at hackathon..." }`
- `GET /api/contacts/search?userId=demo-user-1&query=Who%20can%20help%20with%20internships%3F`
- `GET /api/contacts/followups?userId=demo-user-1&daysInactive=60`

### Capture Example (Beginner Friendly)

Request:

```bash
curl -X POST http://localhost:4000/api/contacts/capture \
   -H "Content-Type: application/json" \
   -d '{"userId":"demo-user-1","input":"Met Rahul at hackathon, works at Amazon, helps with referrals"}'
```

The backend extraction step returns structured fields internally like:

```json
{
   "name": "Rahul",
   "organization": "Amazon",
   "notes": "Met Rahul at hackathon, works at Amazon, helps with referrals"
}
```

If Ollama is not available, the API automatically falls back to a mock extractor so local development still works.

## Architecture Notes

- Semantic ranking uses vector distance operator `<=>` from pgvector.
- Explainability is generated from matched context fields and helper intent data.
- User-level isolation is enforced in all contact queries (`userId` filter).

## Next Enhancements

- Clerk auth and per-user session identity
- Voice capture with browser Speech API + fallback upload transcription
- BullMQ job queue for async extraction/indexing
- Calendar reminders and WhatsApp integration
- Evaluation harness for search relevance metrics
