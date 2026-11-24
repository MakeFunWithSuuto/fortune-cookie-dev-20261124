// Fortune Cookie Wisdom for Developers: writes one fortune, the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE = "Every TODO is a fortune you wrote for someone else to open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE);
