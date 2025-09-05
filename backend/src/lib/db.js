import mongoose from "mongoose";

export const connectDB = async (dbUrl) => {
    try {
        const conn = await mongoose.connect(dbUrl);
        // console.log(`MongoDB connected: ${conn.connection.host}`);
        console.log("MongoDB connected");
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
    }
}