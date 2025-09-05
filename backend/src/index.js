import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import { io, app, server } from "./lib/socket.js";

import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";

dotenv.config();
// const app = express(); // Moved to socket.js
const PORT = process.env.PORT;


app.use(express.json({ limit: "10mb"})); // to parse json body
app.use(express.urlencoded({ limit: "10mb", extended: true })); // to parse urlencoded body
app.use(cookieParser()); // to parse cookies
app.use(cors({
  origin: process.env.VITE_FRONTEND_URL,
  credentials: true,
}))

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});