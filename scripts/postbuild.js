import fs from "fs";
import path from "path";

const VOID =
  "area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr";
const re = new RegExp(`<(${VOID})([^>]*?)\\s*/>`, "gi");

function stripVoidSlashes(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) stripVoidSlashes(full);
    else if (entry.name.endsWith(".html")) {
      const html = fs.readFileSync(full, "utf8");
      fs.writeFileSync(full, html.replace(re, "<$1$2>"));
    }
  }
}

stripVoidSlashes("out");
