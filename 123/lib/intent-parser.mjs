function extractJson(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  const candidate = fenced?.[1] || text;
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("Gemini did not return a JSON object");
  }
  return JSON.parse(candidate.slice(start, end + 1));
}

function normalizeIntentProfile(profile, taxonomy) {
  const validTags = new Set(taxonomy.map((item) => item.tag));
  const weighted_tags = Array.isArray(profile.weighted_tags)
    ? profile.weighted_tags
        .filter((item) => validTags.has(item.tag))
        .map((item) => ({
          tag: item.tag,
          confidence: Math.max(0, Math.min(1, Number(item.confidence) || 0.5)),
          reason: String(item.reason || "").slice(0, 80),
        }))
        .sort((a, b) => b.confidence - a.confidence)
        .slice(0, 6)
    : [];

  return {
    rewritten_query: String(profile.rewritten_query || "").slice(0, 180),
    weighted_tags,
    must_have: Array.isArray(profile.must_have) ? profile.must_have.map(String).slice(0, 5) : [],
    avoid: Array.isArray(profile.avoid) ? profile.avoid.map(String).slice(0, 5) : [],
    mood: String(profile.mood || "").slice(0, 80),
    confidence: Math.max(0, Math.min(1, Number(profile.confidence) || 0.5)),
    clarification_question: String(profile.clarification_question || "").slice(0, 140),
  };
}

function outputTextFromInteraction(data) {
  if (data.output_text || data.outputText) return data.output_text || data.outputText;
  return (
    data.steps
      ?.filter((step) => step.type === "model_output" || step.content)
      .flatMap((step) => step.content || [])
      .map((part) => (typeof part === "string" ? part : part.text || ""))
      .join("") || ""
  );
}

export async function parseIntentWithGemini({
  intentText,
  taxonomy,
  apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "",
  model = process.env.GEMINI_MODEL || "gemini-3.5-flash",
}) {
  if (!apiKey) {
    return { ok: false, reason: "missing_api_key" };
  }

  const taxonomySummary = taxonomy.map((item) => ({
    tag: item.tag,
    label: item.label,
    examples: (item.intent || []).slice(0, 8),
  }));

  const prompt = [
    "You are Barfinder's intent parser for a personal bar recommendation app.",
    "Extract the user's real drinking-night needs from casual Chinese/English mixed text.",
    "Return only strict JSON. Do not include markdown.",
    "Choose tags only from the provided taxonomy. Prefer 2-5 tags. Do not invent tags.",
    "Capture subtle constraints such as quietness, date mood, bartender guidance, budget, dancing, rooftop, whisky, and avoidances.",
    "",
    `User text: ${intentText}`,
    "",
    `Taxonomy: ${JSON.stringify(taxonomySummary)}`,
    "",
    "JSON schema:",
    JSON.stringify({
      rewritten_query: "short normalized user need in Traditional Chinese",
      weighted_tags: [{ tag: "taxonomy tag", confidence: 0.85, reason: "short reason" }],
      must_have: ["hard requirements"],
      avoid: ["things user dislikes or wants to avoid"],
      mood: "overall vibe",
      confidence: 0.8,
      clarification_question: "empty unless the request is too ambiguous",
    }),
  ].join("\n");

  const apiResponse = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      model,
      input: prompt,
      store: false,
      generation_config: {
        temperature: 0.2,
      },
    }),
  });

  if (!apiResponse.ok) {
    const detail = await apiResponse.text();
    return { ok: false, reason: "gemini_error", detail: detail.slice(0, 300) };
  }

  const data = await apiResponse.json();
  const profile = normalizeIntentProfile(extractJson(outputTextFromInteraction(data)), taxonomy);
  return { ok: true, profile, model };
}

export async function parseIntentRequest(body) {
  try {
    const intentText = String(body?.intentText || "").trim();
    const taxonomy = Array.isArray(body?.taxonomy) ? body.taxonomy : [];

    if (!intentText || !taxonomy.length) {
      return { status: 400, body: { ok: false, reason: "missing_intent_or_taxonomy" } };
    }

    const result = await parseIntentWithGemini({ intentText, taxonomy });
    return { status: result.ok ? 200 : 503, body: result };
  } catch (error) {
    return { status: 500, body: { ok: false, reason: "server_error", detail: error.message } };
  }
}
