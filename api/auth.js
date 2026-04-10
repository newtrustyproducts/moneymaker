// api/auth.js — Vercel serverless function
// Yeh Apps Script ko proxy karta hai — mobile CORS fix

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWV5W1YmhQZp8DouYpTSHOgomMgBdMZEXcmYrCHKGLLBJKX94gowTYfG1iJmKwAngA/exec";

export default async function handler(req, res) {
  // CORS headers — sabhi devices ke liye
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    let response;

    if (req.method === "GET") {
      // Login / check
      const params = new URLSearchParams(req.query).toString();
      response = await fetch(`${APPS_SCRIPT_URL}?${params}`);
    } else if (req.method === "POST") {
      // Register
      response = await fetch(APPS_SCRIPT_URL, {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body   : JSON.stringify(req.body),
      });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ success: false, message: "Server error: " + err.message });
  }
}
