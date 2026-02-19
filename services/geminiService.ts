
import { GoogleGenAI } from "@google/genai";

export async function searchProperties(query: string, location?: { lat: number, lng: number }) {
  try {
    // Safely retrieve API key from environment to prevent crashes in raw browser environments
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    
    if (!apiKey) {
      console.error("LATITUDE: API_KEY is missing from environment variables.");
      return { 
        text: "The intelligence engine is currently initializing. Please ensure the API key is configured in your hosting dashboard.", 
        sources: [] 
      };
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Search for premium real estate properties in Delhi NCR based on: "${query}". Provide a concise summary of top developments, current market sentiment, and typical price ranges in that area. Focus on trust and quality.`,
      config: {
        tools: [{ googleSearch: {} }],
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
