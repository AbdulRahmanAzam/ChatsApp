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
const MONGODB_URI = process.env.MONGODB_URI;


app.use(express.json({ limit: "10mb"})); // to parse json body
app.use(express.urlencoded({ limit: "10mb", extended: true })); // to parse urlencoded body
app.use(cookieParser()); // to parse cookies
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))

app.get("/", (req, res) => {
  res.status(200).json({ message: "ChatsApp API is running" });
});
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

// to test the backend connection
app.get("/api/test", (req, res) => {
  console.log("Test endpoint hit at:", new Date().toISOString());
  console.log("Request headers:", req.headers);
  console.log("Origin:", req.headers.origin);
  
  res.status(200).json({ 
    message: "Backend is working!", 
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB(MONGODB_URI);
});