const express = require('express');
const OpenAI = require('openai');
const { protect } = require('../middleware/auth');

const router = express.Router();

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

// Summarize
router.post('/summarize', protect, async (req, res) => {
  const { content } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      extra_headers: {
        "HTTP-Referer": "http://localhost:3000", // Optional
        "X-Title": "NoteGenie", // Optional
      },
      model: 'tngtech/deepseek-r1t2-chimera:free',
      messages: [
        { role: 'system', content: 'Summarize the following text in a concise manner.' },
        { role: 'user', content }
      ],
    });
    res.json({ summary: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rewrite
router.post('/rewrite', protect, async (req, res) => {
  const { content } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      extra_headers: {
        "HTTP-Referer": "http://localhost:3000", // Optional
        "X-Title": "NoteGenie", // Optional
      },
      model: 'tngtech/deepseek-r1t2-chimera:free',
      messages: [
        { role: 'system', content: 'Rewrite the following text to make it better.' },
        { role: 'user', content }
      ],
    });
    res.json({ rewritten: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
