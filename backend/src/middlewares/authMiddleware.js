import express from "express";
import User from "../models/userModel.js"
import jwt from "jsonwebtoken";

export const protectRoute = async(req, res, next) => {
    try {
        const token = req.cookies.jwt; // put its name jwt because we set it in utils.js
        if(!token){
            return res.status(401).json({message: "Not authorized, no token"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);        
        if(!decoded ){
            console.log("Decoded token:", decoded);
            return res.status(401).json({message: "Not authorized, invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({message: "Not authorized, user not found"});
        }

        req.user = user; // attach user to request object
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        return res.status(500).json({message: "Server error"});
    }
}
