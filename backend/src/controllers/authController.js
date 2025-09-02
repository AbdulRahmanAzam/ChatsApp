import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {
    const {fullName, email, password} = req.body; // this will only work if we have express.json() middleware in index.js

    try {
        if(!fullName || !email || !password){
            console.log(fullName, email, password);
            return res.status(400).json({message: "Please provide all required fields"});
        }

        if(password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters long"});
        }

        const user = await User.findOne({email});
        if(user)
            return res.status(400).json({message: "User already exists"});

        // hash the password before saving to db
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword
        })

        if(newUser){
            // generate a jwt token
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            });

        }else{
            return res.status(400).json({message: "Invalid user data"});
        }

    } catch (error) {
        console.error("Error in signup:", error.message);
        return res.status(500).json({message: "Internal Server error"});
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        if(!email || !password){
            console.log(email, password);
            return res.status(400).json({message: "Please provide all required fields"});
        }

        const user = await User.findOne({email});
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if(!user || !isPasswordMatch)
            return res.status(400).json({message: "Invalid credentials"});

        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic
        })
        
    } catch (error) {
        console.error("Error in login:", error.message);
        return res.status(500).json({message: "Internal Server error"});
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', {maxAge: 0})
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.loger("Error in logout:", error.message);
        return res.status(500).json({message: "Internal Server error"});
    }
}

export const updateProfile = async ( req, res) => {
    try {
        const {profilePic} = req.body;
        const userId = req.user._id;

        if(!profilePic)
            return res.status(400).json({message: "Profile picture is required"});

        const uploadedResponse = await cloudinary.uploader.upload(profilePic);
        if(!uploadedResponse)
            return res.status(500).json({message: "Failed to upload Image"});

        const updatedUser = await User.findByIdAndUpdate(userId, {profilePic: uploadedResponse.secure_url}, {new: true})

        res.status(200).json({
            _id: updatedUser._id,
            fullName: updatedUser.fullName,
            email: updatedUser.email,
            profilePic: updatedUser.profilePic
        })


    } catch (error) {
        console.error("Error in updateProfile:", error.message);
        return res.status(500).json({message: "Internal Server error"});
    }
}

export const checkAuth = (req, res) => {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth:", error.message);
        return res.status(500).json({message: "Internal Server error"});
    }
}