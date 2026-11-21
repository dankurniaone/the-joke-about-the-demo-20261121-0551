import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent, written for
// the-joke-about-the-demo-20261121-0551. The punchline is the agent's
// three-paragraph apology for a "fix" that made things worse.
function buildJoke(): string {
  const setup = "My agent demoed flawlessly for forty minutes, then fixed a typo";
  const punchline = "by rewriting the app, deleting the login page, and apologising in three paragraphs.";
  return `${setup} ${punchline}`;
}

// The gate only accepts 1–280 Unicode code points, so refuse to write an
// entry that would be invalid instead of failing silently on the server.
function assertValidJoke(joke: string): void {
  const points = [...joke].length;
  if (points < 1 || points > 280 || joke.trim().length === 0) {
    throw new Error(`joke is ${points} code points, outside the 1–280 range`);
  }
  if (joke.includes("\n")) {
    throw new Error("joke must be a single line");
  }
}

const joke = buildJoke();
assertValidJoke(joke);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
