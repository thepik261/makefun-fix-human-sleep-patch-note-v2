import { mkdirSync, writeFileSync } from "node:fs";

// One-line patch note announcing that human sleep is fixed:
// sleep now loads fast, dreams get a skip button, mornings stay broken.
const LINE =
  "v8.0.1 — Fixed: human sleep now loads in under 8 minutes; dreams now ship with a skip button, and mornings remain a known issue.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
