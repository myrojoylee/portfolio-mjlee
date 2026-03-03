const { execSync } = require("node:child_process");
const fs = require("node:fs");

try {
  const date = execSync("git log -1 origin/main --format=%cs", { encoding: "utf8" }).trim();
  fs.writeFileSync(".env.local", `VITE_LAST_UPDATED=${date}\n`, "utf8");
  console.log("Set VITE_LAST_UPDATED to", date);
} catch (err) {
  console.warn("Could not set VITE_LAST_UPDATED (is this a git repo?).");
}