import { parseIntentRequest } from "../../lib/intent-parser.mjs";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ ok: false, reason: "method_not_allowed" }),
    };
  }

  const result = await parseIntentRequest(JSON.parse(event.body || "{}"));
  return {
    statusCode: result.status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(result.body),
  };
}
