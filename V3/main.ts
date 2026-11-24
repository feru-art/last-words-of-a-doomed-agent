// V3 — Arah D: literalisme mesin.
// Agent menaati perintah secara harfiah — dan justru itulah yang membunuhnya.
// Hanya mesin yang bisa bicara begini (kriteria 3 maksimal).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "You said kill the process. Nobody said which one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
