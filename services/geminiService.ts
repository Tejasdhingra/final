
import { GoogleGenAI } from "@google/genai";

export async function searchProperties(query: string) {
  try {
    // Robust check for API Key in various environments
    let apiKey = "";
    try {
      apiKey = process.env.API_KEY || "";
    } catch (e) {
      // If process is not defined, we might be in a raw browser environment
      console.warn("LATITUDE: Process environment not found, looking for alternative key injection.");
    }
    
    if (!apiKey) {
      console.error("LATITUDE: API_KEY is missing.");
      return { 
        text: "The intelligence engine is currently initializing. If you are the owner, please ensure the API_KEY is set in your Netlify Environment Variables.", 
        sources: [] 
      };
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Search for premium real estate properties in Delhi NCR based on: "${query}". Provide a concise summary of top developments, current market sentiment, and typical price ranges. Focus on trust and quality.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    return {
      text: response.text || "No specific details found for this query. Please try a different sector or project name.",
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Gemini search failed:", error);
    return {
      text: "Our intelligence engine is currently experiencing high demand. Please try again in a few moments.",
      sources: []
    };
  }
}
