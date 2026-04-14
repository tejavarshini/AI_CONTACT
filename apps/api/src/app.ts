import express from "express";
import cors from "cors";
import { contactRouter } from "./routes/contact.routes.js";
import { env } from "./lib/env.js";

export const app = express();

app.use(cors({ origin: env.FRONTEND_URL }));
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/contacts", contactRouter);
