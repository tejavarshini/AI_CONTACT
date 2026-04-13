import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(scriptDir, "..");
const envPath = path.join(packageRoot, ".env");
const prismaBin = process.platform === "win32"
  ? path.resolve(packageRoot, "..", "..", "node_modules", "prisma", "build", "index.js")
  : "prisma";

if (fs.existsSync(envPath)) {
  const contents = fs.readFileSync(envPath, "utf8");
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) continue;

    const key = trimmed.slice(0, equalsIndex).trim();
    const value = trimmed.slice(equalsIndex + 1).trim();
    if (key && !(key in process.env)) {
      process.env[key] = value;
    }
  }
}

const command = process.platform === "win32" ? process.execPath : prismaBin;
const args = process.platform === "win32"
  ? [prismaBin, "migrate", "dev", "--name", "init"]
  : ["migrate", "dev", "--name", "init"];

const result = spawnSync(command, args, {
  cwd: packageRoot,
  stdio: "inherit",
  env: process.env,
  shell: false
});

if (result.error) {
  console.error(result.error);
}

process.exit(result.status ?? 1);
