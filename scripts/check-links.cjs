// Simple link checker for portfolioData.ts (CommonJS for ESM projects)
// Usage:
//   node scripts/check-links.cjs            -> only report
//   node scripts/check-links.cjs --write    -> replace broken links with "#"

const fs = require("node:fs");
const path = require("node:path");
const { setTimeout: delay } = require("node:timers/promises");

const FILE = path.resolve(__dirname, "../src/content/portfolioData.ts");
const DO_WRITE = process.argv.includes("--write");

function extractLinks(content) {
  const regex = /link:\s*"([^"]+)"/g;
  const links = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    const url = m[1];
    if (url.startsWith("http://") || url.startsWith("https://")) {
      links.push({ url, index: m.index });
    }
  }
  return links;
}

async function checkUrl(url) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 8000);
  try {
    let res = await fetch(url, { method: "HEAD", signal: controller.signal });
    if (res.ok) return { ok: true, status: res.status };
    res = await fetch(url, { method: "GET", signal: controller.signal });
    return { ok: res.ok, status: res.status };
  } catch (e) {
    return { ok: false, error: e.message };
  } finally {
    clearTimeout(t);
  }
}

async function main() {
  const content = fs.readFileSync(FILE, "utf8");
  const linkEntries = extractLinks(content);
  const unique = Array.from(new Set(linkEntries.map((l) => l.url)));

  console.log(`Found ${unique.length} unique links to check...`);

  const results = {};
  const queue = unique.slice();
  const workers = Math.min(8, unique.length || 1);

  async function worker() {
    while (queue.length) {
      const url = queue.shift();
      const r = await checkUrl(url);
      results[url] = r;
      await delay(50);
      console.log(`${r.ok ? "OK   " : "FAIL "} ${url} ${r.status ? `(${r.status})` : r.error ? `- ${r.error}` : ""}`);
    }
  }

  await Promise.all(Array.from({ length: workers }, worker));

  const broken = Object.entries(results)
    .filter(([, r]) => !r.ok)
    .map(([url]) => url);

  console.log("\nSummary:");
  console.log(`OK: ${unique.length - broken.length}`);
  console.log(`Broken: ${broken.length}`);

  if (!DO_WRITE || broken.length === 0) {
    return;
  }

  let updated = content;
  for (const bad of broken) {
    const safe = bad.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(link:\\s*)"(?:${safe})"`, "g");
    updated = updated.replace(re, `$1"#"`);
  }

  if (updated !== content) {
    fs.writeFileSync(FILE, updated, "utf8");
    console.log(`\\nUpdated ${FILE} with "#" for ${broken.length} broken link(s).`);
  } else {
    console.log("\\nNo changes written.");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

