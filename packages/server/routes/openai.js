import { Router } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

router.post("/api/analyze", async(req, res) => {
    console.log("Inside of /api/analyze");
    try {
      // Use the image sent by the client
      const dataUri = req.body.image;
      if (!dataUri) {
        return res.status(400).json({ error: "No image provided" });
      }
  
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "what's in this image?" },
              {
                type: "image_url",
                image_url: { url: dataUri },
              },
            ],
          },
        ],
      });
  
      const result = completion.choices[0].message.content;
      console.log(result);
      res.json({ result });
    } catch (error) {
      console.error("Error analyzing image:", error);
      res.status(500).json({ error: "Internal server error" });
    }
});

export default router;