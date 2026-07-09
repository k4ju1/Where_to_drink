import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { parseIntentRequest } from "./lib/intent-parser.mjs";

const root = fileURLToPath(new URL(".", import.meta.url));

function loadLocalEnv() {
  try {
    const raw = readFileSync(join(root, ".env"), "utf8");
    raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .forEach((line) => {
        const separator = line.indexOf("=");
        if (separator === -1) return;
        const key = line.slice(0, separator).trim();
        const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "");
        if (key && process.env[key] == null) process.env[key] = value;
      });
  } catch {
    // .env is optional for local personal use.
  }
}

loadLocalEnv();

const port = Number(process.env.PORT || 8123);
const geminiApiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "";
const geminiModel = process.env.GEMINI_MODEL || "gemini-3.5-flash";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function sendJson(response, status, body) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(body));
}

async function readRequestJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return {};
  return JSON.parse(raw);
}

async function handleIntent(request, response) {
  const result = await parseIntentRequest(await readRequestJson(request));
  sendJson(response, result.status, result.body);
}

async function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);
  const targetPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = normalize(join(root, targetPath));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
    });
    response.end(content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

createServer((request, response) => {
  if (request.method === "POST" && request.url?.startsWith("/api/intent")) {
    handleIntent(request, response);
    return;
  }

  if (request.method === "GET" || request.method === "HEAD") {
    serveStatic(request, response);
    return;
  }

  response.writeHead(405);
  response.end("Method not allowed");
}).listen(port, () => {
  console.log(`Barfinder running at http://127.0.0.1:${port}`);
  if (!geminiApiKey) {
    console.log("Gemini parser disabled: set GEMINI_API_KEY to enable it.");
  }
});
