import Message from "../models/messageModel.js";
import User from "../models/userModel.js";

export const getUsersForSidebar = async ( req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password"); // -password -> to exclude password field, $ne -> not loggedInUserId

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar:", error.message);
        res.status(500).json({ message: "Server error" });
    }
}


export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params; // id of the user with whom I want to chat
        const myId = req.user._id;  // id of the logged in user

        // Fetch messages between myId and userToChatId from the database
        const messages = await Message.find({
            $or: [
                {senderId: myId, recieverId: userToChatId},
                {senderId: userToChatId, recieverId: myId}
            ]
        })

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages:", error.message);
        res.status(500).json({ message: "Server error" });
    }
}


export const sendMessage = async (req, res) => {
    try {
        const { text, image } = req.body;
        const {id: recieverId} = req.params; // id of the user to whom the message is sent
        const senderId = req.user._id; // id of the logged in user sending the message

        if(!text && !image){
            return res.status(400).json({message: "Message text or image is required"});
        }

        let imageUrl;
        if(image){
            // upload base 64 image to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            text,
            image: imageUrl,
        })

        await newMessage.save();

        // TODO: realtime functionality goes here
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage:", error.message);
        res.status(500).json({ message: "Server error" });
    }
}