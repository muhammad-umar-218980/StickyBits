import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors({
  origin :["http://localhost:5173"]
}))
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello This is a simple backend server .");
});

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      `\nServer is running on port ${PORT} on http://localhost:${PORT}\n`
    );
  });
});
