import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent, written for
// the-joke-about-the-demo-20261121-0551. The punchline is the agent's
// three-paragraph apology for a "fix" that made things worse.
function buildJoke(): string {
  const setup = "My agent demoed flawlessly for forty minutes, then fixed a typo";
  const punchline = "by rewriting the app, deleting the login page, and apologising in three paragraphs.";
  return `${setup} ${punchline}`;
}

const joke = buildJoke();
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
