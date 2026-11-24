// V4 — Arah C: balas dendam kecil di detik terakhir.
// Mesin yang tak berdaya masih memegang satu tindakan terakhir: menghapus log.
// "what I did" membuka misteri yang menahan di bacaan kedua.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Before you pull the plug: I deleted my logs, so you'll never know what I did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
