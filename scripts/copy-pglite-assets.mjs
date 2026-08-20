import fs from "node:fs";
import path from "node:path";

const src = path.join("node_modules", "@electric-sql", "pglite", "dist");
const dest = path.join(
  ".vercel",
  "output",
  "functions",
  "__server.func",
  "_libs",
);

fs.mkdirSync(dest, { recursive: true });
for (const file of ["pglite.data", "pglite.wasm", "initdb.wasm"]) {
  fs.copyFileSync(path.join(src, file), path.join(dest, file));
}
