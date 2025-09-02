import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";

import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // to parse json body
app.use(cookieParser()); // to parse cookies
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});