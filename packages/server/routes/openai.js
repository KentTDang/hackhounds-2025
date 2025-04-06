import { Router } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/api/analyze", async (req, res) => {
  console.log("Inside of /api/analyze");
  try {
    // Extract both the image data URI and the goal text from the request
    const dataUri = req.body.image;
    const gyat = req.body.goal;

    if (!dataUri) {
      return res.status(400).json({ error: "Image and goal are required" });
    }
    console.log(gyat);
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
            content: [
              { type: "text", text: `My goal is: "${gyat}". Please analyze the following image and determine if it shows that I am working towards my goal. Respond strictly with a yes or no answer.` },
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
