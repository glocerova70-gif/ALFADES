import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants.ts";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
    if (chatSession) return chatSession;

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.error("API_KEY is missing in environment variables.");
        throw new Error("API Key configuration error.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    chatSession = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
        },
    });

    return chatSession;
};

export const sendMessageStream = async (
    message: string, 
    onChunk: (text: string) => void
): Promise<void> => {
    try {
        const chat = initializeChat();
        const result = await chat.sendMessageStream({ message });
        
        for await (const chunk of result) {
            const c = chunk as GenerateContentResponse;
            if (c.text) {
                onChunk(c.text);
            }
        }
    } catch (error) {
        console.error("Error communicating with Gemini:", error);
        onChunk("Lo siento, tuve un problema de conexión. Por favor intenta de nuevo.");
    }
};