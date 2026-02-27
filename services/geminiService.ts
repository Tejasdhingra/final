
import { GoogleGenAI } from "@google/genai";
import { CompassAnswers, Property } from "../types";

const getApiKey = () => {
  try {
    return process.env.API_KEY || "";
  } catch (e) {
    return "";
  }
};

export async function searchProperties(query: string) {
  const apiKey = getApiKey();
  if (!apiKey) return { text: "Intelligence engine offline.", sources: [] };

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Search for premium real estate properties in Delhi NCR based on: "${query}". Focus on high-end advisory perspective.`,
      config: { tools: [{ googleSearch: {} }] },
    });
    return {
      text: response.text || "No results.",
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    return { text: "Engine offline.", sources: [] };
  }
}

export async function generateCompassInsight(answers: CompassAnswers, matchedProperty: Property) {
  const apiKey = getApiKey();
  if (!apiKey) return "Our investment strategists recommend focusing on emerging high-growth corridors.";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `ACT AS A SENIOR REAL ESTATE STRATEGIST.
      Client Profile:
      - Intent: ${answers.intent}
      - Budget: ${answers.budget}
      - Asset Preference: ${answers.assetType}
      - Hold Period: ${answers.holdingPeriod}
      - Risk: ${answers.riskAppetite}
      
      Match Recommendation: ${matchedProperty.name} in ${matchedProperty.location}.
      
      Generate a professional, sophisticated 3-sentence investment insight explaining why this asset fits their profile. Mention market momentum and corridor potential.`,
    });
    return response.text;
  } catch (error) {
    return "Strategic allocation in high-growth corridors is advised for this profile.";
  }
}
