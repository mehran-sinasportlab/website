import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY missing" });
  }

  const { userProfile } = req.body || {};
  if (!userProfile) {
    return res.status(400).json({ error: "Missing userProfile" });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: userProfile,
      config: { temperature: 0.6 },
    });

    const text =
      result?.text ??
      (typeof result?.response?.text === "function"
        ? result.response.text()
        : "");

    return res.status(200).json({ text });
  } catch (e) {
    return res.status(500).json({ error: "Gemini error" });
  }
}
