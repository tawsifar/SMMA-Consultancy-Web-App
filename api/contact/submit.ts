export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    // Note: Vercel serverless functions are read-only.
    // We cannot use fs.writeFileSync('submissions.json').
    // In a production app, insert newSubmission into a database (Postgres, Firebase, etc.)
    console.log(`[Submission Success] Standard inquiry received for: ${brandName}`);

    res.status(200).json({ 
       success: true, 
       message: "Inquiry processed successfully.",
       submission: newSubmission
    });
  } catch (error) {
    console.error("Error storing inquiry submission:", error);
    res.status(500).json({ error: error?.message || "Failed to persist core campaign parameters." });
  }
}
