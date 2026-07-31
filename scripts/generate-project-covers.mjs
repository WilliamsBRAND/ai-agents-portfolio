import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
const force = args.includes("--force");

function argValue(flag) {
  const hit = args.find((a) => a.startsWith(`${flag}=`));
  return hit ? hit.slice(flag.length + 1) : null;
}

const PROMPTS_PATH = argValue("--prompts") || join(ROOT, "scripts", "project-cover-prompts.json");
const OUT_DIR = argValue("--out") || join(ROOT, "public", "project-covers");
const MANIFEST_PATH = argValue("--manifest") || join(ROOT, "src", "lib", "project-covers.json");
const DATA = JSON.parse(readFileSync(PROMPTS_PATH, "utf8"));
const URL_BASE =
  "/" + relative(join(ROOT, "public"), OUT_DIR).split(sep).join("/");

function readApiKey() {
  const argKey = args.find((a) => a.startsWith("--key="));
  if (argKey) return argKey.slice("--key=".length).trim();
  if (process.env.OPENROUTER_API_KEY) return process.env.OPENROUTER_API_KEY.trim();
  const envLocal = join(ROOT, ".env.local");
  if (existsSync(envLocal)) {
    const match = readFileSync(envLocal, "utf8").match(
      /^OPENROUTER_API_KEY\s*=\s*["']?([^"'\r\n]+)/
    );
    if (match) return match[1].trim();
  }
  return null;
}

const API_KEY = readApiKey();
const MODEL = process.env.IMAGE_MODEL || "google/gemini-2.5-flash-image";
const ENDPOINT = "https://openrouter.ai/api/v1/images";

function extForMime(mime) {
  if (!mime) return "png";
  if (mime.includes("jpeg")) return "jpg";
  if (mime.includes("webp")) return "webp";
  return "png";
}

async function generate(slug, prompt) {
  const body = {
    model: MODEL,
    prompt,
    aspect_ratio: "16:9",
  };

  let lastError = null;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status}: ${detail.slice(0, 400)}`);
      }

      const data = await res.json();
      const image = data?.data?.[0];
      if (!image?.b64_json) {
        throw new Error("no image in response");
      }

      const mime = image.media_type || "image/png";
      const ext = extForMime(mime);
      const fileName = `${slug}.${ext}`;
      const outPath = join(OUT_DIR, fileName);
      writeFileSync(outPath, Buffer.from(image.b64_json, "base64"));
      return { slug, file: fileName, ok: true, cost: data?.usage?.cost };
    } catch (err) {
      lastError = err;
      const retriable = /429|500|502|503|504|overloaded/i.test(String(err.message));
      if (!retriable || attempt === 2) break;
      await new Promise((r) => setTimeout(r, 4000));
    }
  }
  return { slug, ok: false, error: String(lastError?.message ?? "unknown error") };
}

async function main() {
  if (!API_KEY) {
    console.error(
      "\nMissing OPENROUTER_API_KEY.\nSet it and re-run, or pass it directly:\n  $env:OPENROUTER_API_KEY = \"...\"  then  npm run covers\n  or  npm run covers -- --key=YOUR_KEY\nGet a key at https://openrouter.ai/keys"
    );
    process.exit(1);
  }

  mkdirSync(OUT_DIR, { recursive: true });

  const results = [];
  for (const [slug, prompt] of Object.entries(DATA.prompts)) {
    const existing = readdirSync(OUT_DIR).some((f) => f.startsWith(`${slug}.`));
    if (existing && !force) {
      console.log(`skip  ${slug} (already generated)`);
      continue;
    }
    const fullPrompt = `${DATA.stylePrefix}\n${prompt}`;
    console.log(`gen   ${slug} ...`);
    const result = await generate(slug, fullPrompt);
    results.push(result);
    if (result.ok) {
      console.log(`  ok  ${result.file}${result.cost ? `  ($${result.cost.toFixed(4)})` : ""}`);
    } else {
      console.error(`  FAIL ${result.error}`);
    }
  }

  const manifest = {};
  for (const dirEntry of readdirSync(OUT_DIR)) {
    if (/\.(png|jpg|jpeg|webp)$/i.test(dirEntry)) {
      const slug = dirEntry.replace(/\.[^.]+$/, "");
      manifest[slug] = `${URL_BASE}/${dirEntry}`;
    }
  }
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

  const failed = results.filter((r) => !r.ok).length;
  const okCount = results.filter((r) => r.ok).length;
  console.log(
    `\nDone. Generated ${okCount}, failed ${failed}, total covers in manifest: ${Object.keys(manifest).length}.`
  );
  process.exit(failed > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("Fatal:", err?.message ?? err);
  process.exit(1);
});
