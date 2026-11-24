// V1 — Arah B: bathos / alasan sepele.
// Agent mati bukan karena takdir besar, tapi karena typo manusia.
// Kriteria 1: "dying" + penyebab eksplisit. Kriteria 2: keagungan dipotong kebanalan.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "So I'm dying because someone typed 'shutdown' instead of 'shut up'?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
