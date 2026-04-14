import { app } from "./app.js";
import { env } from "./lib/env.js";

if (!process.env.VERCEL) {
  app.listen(env.API_PORT, () => {
    console.log(`SCIA API listening on http://localhost:${env.API_PORT}`);
  });
}
