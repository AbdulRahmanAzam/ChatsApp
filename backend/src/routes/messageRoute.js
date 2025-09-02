import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages); // to get messages with a specific user

router.post("/send/:id", protectRoute, sendMessage); // to send message to a specific user

export default router;