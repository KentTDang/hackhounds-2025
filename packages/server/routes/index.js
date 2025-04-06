import { Router } from "express";
import openaiRouter from "./openai.js";

const router = Router();

router.use(openaiRouter);

export default router;