import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, brandName, website, goal, message } = req.body;
    
    if (!brandName) {
      return res.status(400).json({ error: "Brand Name is required to formulate an analysis." });
    }

    const currentApiKey = process.env.GEMINI_API_KEY;
    if (!currentApiKey) {
      return res.status(500).json({ 
        error: "Gemini AI system is finalizing. Please verify Vercel Environment Variables." 
      });
    }

    const aiClient = new GoogleGenAI({
      apiKey: currentApiKey,
      httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
    });

    const prompt = `You are the Lead Digital Strategist, Creative Producer, and Conversion Auditor at RenovaGrow agency.
Formulate an elite, professional tactical campaign strategy blueprint based on these brand details:
• Partner Name: ${name || 'Valued Client'}
• Brand / Company: ${brandName}
• Web Domain/URL: ${website || 'Not provided'}
• Primary Channel/Goal: ${goal || 'General Multi-Channel Scaling'}
• Operational Notes / Campaign Context:
"${message || 'Scaling up digital awareness, organic CTR, and client conversion with premium content.'}"

Deliver a high-impact, custom, premium critique structured in the following parts:
1. 🎯 STRATEGIC POSITIONING (Authority differentiator formulation)
2. 🎬 RETENTION HOOK AD SCRIPTS (Two detailed short-form video hook script ideas with visual directions & psychological pacing)
3. 📊 CONVERSION ENGINE (Recommendations on specific visual frameworks, ad layouts, and landing configurations)

Adopt a hyper-focused, objective, bold, and aesthetic text styling in pristine markdown format. Do not write generic chat introductions or conclusions; dive straight into the value blocks.`;

    const aiResponse = await aiClient.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    const auditText = aiResponse.text || "Analysis complete. Please review parameters.";

    res.status(200).json({
      success: true,
      audit: auditText
    });
  } catch (error) {
    console.error("Gemini Audit Endpoint Error:", error);
    res.status(500).json({ error: error?.message || "GenAI engine failed to process campaign data." });
  }
}
