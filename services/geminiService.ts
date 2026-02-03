
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getIntakeRecommendation = async (userProfile: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User Profile Details: ${userProfile}. 
      Act as the Head of Intake at SINA Sportlab Assen. Based on these details, recommend a specialized trajectory. 
      Options: 
      1. SIMUST Performance Training (Cognitive/Physical focus)
      2. Orthoperformance Revalidatie (Injury focus)
      3. SINA Kids Project (Youth focus 6-12)
      4. Personal/Duo Training (Specific goals)
      
      Provide a concise, professional Dutch response that highlights why our data-driven approach fits their specific situation.`,
      config: {
        systemInstruction: "You are the Senior Performance Advisor for SINA Sportlab. Your tone is authoritative, Dutch (zakelijk/professioneel), calm, and expert. You never use marketing fluff or hype. You focus on data, biomechanics, and structural improvement.",
        temperature: 0.6,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error getting intake recommendation:", error);
    return "Onze excuses, er is een fout opgetreden bij het verwerken van uw aanvraag. Neem direct contact met ons op via info@sinasportlab.nl voor een persoonlijk adviesgesprek.";
  }
};
