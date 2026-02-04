export const config = {
  runtime: "nodejs",
};

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

    return res.status(200).json({
      text: result.text,
    });
  } catch (error) {
    console.error("Gemini API error:", error);
    return res.status(500).json({ error: "Gemini error" });
  }
}
