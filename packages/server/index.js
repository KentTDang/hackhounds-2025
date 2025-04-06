import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(router);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));