
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function searchProperties(query: string, location?: { lat: number, lng: number }) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Search for premium real estate properties in Delhi NCR based on: "${query}". Provide a concise summary of top developments, current market sentiment, and typical price ranges in that area. Focus on trust and quality.`,
      config: {
        tools: [{ googleSearch: {} }],
        // If maps grounding was needed for specific places, we'd add it here
      },
    });

    return {
      text: response.text,
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Gemini search failed:", error);
    return null;
  }
}
