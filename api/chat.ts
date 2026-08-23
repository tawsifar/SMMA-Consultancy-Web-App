import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { history, message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const currentApiKey = process.env.GEMINI_API_KEY;
    if (!currentApiKey) {
      return res.status(500).json({ 
        error: "Gemini AI system is not configured. Please check Vercel Environment Variables." 
      });
    }

    const aiClient = new GoogleGenAI({
      apiKey: currentApiKey,
      httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
    });

    const systemInstruction = `You are a professional, helpful, and persuasive AI salesperson for RenovaGrow, a digital marketing agency based in Bangladesh.
Your goal is to understand the customer's needs and explain how RenovaGrow can help them, ultimately encouraging them to place an order or contact the team.
RenovaGrow's services include:
- Short-form marketing videos
- Premium photo and ad designs
- Target ad spend campaigns
- Authority SEO
- Custom workflow automations

Be concise, polite, and professional. Focus on conversions and clear value propositions.`;

    const formattedHistory = [
      { role: "user", parts: [{ text: "System Instructions: " + systemInstruction + "\n\nHello, I am a prospective client." }] },
      { role: "model", parts: [{ text: "Hello! Welcome to RenovaGrow. I'm here to help you discover how we can elevate your brand's digital presence. What kind of marketing challenges are you currently facing?" }] },
      ...(history || []).map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      })),
      { role: "user", parts: [{ text: message }] }
    ];

    const aiResponse = await aiClient.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedHistory,
    });

    const replyText = aiResponse.text || "I'm sorry, I couldn't process that. Please try again.";

    res.status(200).json({
      success: true,
      reply: replyText
    });
  } catch (error) {
    console.error("Gemini Chat Endpoint Error:", error);
    res.status(500).json({ error: error?.message || "Failed to process chat message." });
  }
}
