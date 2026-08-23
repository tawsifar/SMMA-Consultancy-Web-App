import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client on the server
  let aiClient: GoogleGenAI | null = null;
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini AI Client initialized successfully on server side.");
  } else {
    console.warn("GEMINI_API_KEY is not defined. AI functionality will ask the user to verify configuration.");
  }

  const SUBMISSIONS_FILE = path.join(process.cwd(), 'submissions.json');

  // REST API for Campaign Inquiries submission persistence
  app.post("/api/contact/submit", async (req, res) => {
    try {
      const { name, email, brandName, website, goal, message } = req.body;
      
      if (!name || !email || !brandName || !message) {
        return res.status(400).json({ error: "Please provide all required fields (name, email, brandName, message)." });
      }

      const newSubmission = {
        id: "sub_" + Math.random().toString(36).substr(2, 9),
        name,
        email,
        brandName,
        website: website || "",
        goal,
        message,
        timestamp: new Date().toISOString()
      };

      let existingSubmissions = [];
      try {
        if (require('fs').existsSync(SUBMISSIONS_FILE)) {
          const fileData = require('fs').readFileSync(SUBMISSIONS_FILE, 'utf-8');
          existingSubmissions = JSON.parse(fileData);
        }
      } catch (readErr) {
        console.error("Error reading submissions.json file, starting fresh:", readErr);
      }

      existingSubmissions.push(newSubmission);

      try {
        require('fs').writeFileSync(SUBMISSIONS_FILE, JSON.stringify(existingSubmissions, null, 2), 'utf-8');
        console.log(`[Submission Success] Standard inquiry received & stored securely on server for: ${brandName}`);
      } catch (writeErr) {
        console.error("Error writing submission to submissions.json:", writeErr);
      }

      res.json({ 
        success: true, 
        message: "Inquiry persisted successfully on RenovaGrow server.",
        submission: newSubmission
      });
    } catch (error: any) {
      console.error("Error storing inquiry submission:", error);
      res.status(500).json({ error: error?.message || "Failed to persist core campaign parameters." });
    }
  });

  // REST API for Campaign AI Generator powered by Gemini API
  app.post("/api/audit/generate", async (req, res) => {
    try {
      const { name, brandName, website, goal, message } = req.body;
      
      if (!brandName) {
        return res.status(400).json({ error: "Brand Name is required to formulate an analysis." });
      }

      const currentApiKey = process.env.GEMINI_API_KEY;
      if (!aiClient && currentApiKey) {
        aiClient = new GoogleGenAI({
          apiKey: currentApiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            }
          }
        });
      }

      if (!aiClient) {
        return res.status(500).json({ 
          error: "Gemini AI system is finalizing. Please verify process.env.GEMINI_API_KEY parameters." 
        });
      }

      const prompt = `
You are the Lead Digital Strategist, Creative Producer, and Conversion Auditor at RenovaGrow agency.
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

Adopt a hyper-focused, objective, bold, and aesthetic text styling in pristine markdown format. Do not write generic chat introductions or conclusions; dive straight into the value blocks.
`;

      const aiResponse = await aiClient.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      const auditText = aiResponse.text || "Analysis complete. Please review parameters.";

      res.json({
        success: true,
        audit: auditText
      });
    } catch (error: any) {
      console.error("Gemini Audit Endpoint Error:", error);
      res.status(500).json({ error: error?.message || "GenAI engine failed to process campaign data." });
    }
  });

  // REST API for Chatbot powered by Gemini API
  app.post("/api/chat", async (req, res) => {
    try {
      const { history, message } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }

      const currentApiKey = process.env.GEMINI_API_KEY;
      if (!aiClient && currentApiKey) {
        aiClient = new GoogleGenAI({
          apiKey: currentApiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            }
          }
        });
      }

      if (!aiClient) {
        return res.status(500).json({ 
          error: "Gemini AI system is not configured. Please check API key." 
        });
      }

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
        ...(history || []).map((msg: { role: string, content: string }) => ({
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

      res.json({
        success: true,
        reply: replyText
      });
    } catch (error: any) {
      console.error("Gemini Chat Endpoint Error:", error);
      res.status(500).json({ error: error?.message || "Failed to process chat message." });
    }
  });

  // Serve static assets and main application
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Critical server configuration error:", error);
});
