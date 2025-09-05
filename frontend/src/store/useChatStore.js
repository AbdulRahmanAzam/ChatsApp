import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";
import { useAuthStore } from "./useAuthStore.js";


export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,


    getUsers: async () => {
        set({ isUsersLoading: true });

        try {
            const res = await axiosInstance.get("/messages/users");
            set({ users: res.data });
        } catch (error) {
            console.log("Error in useChatStore in getUsers:", error);
            toast.error(error?.response?.data?.message || "Error fetching users");
        } finally{
            set({ isUsersLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessagesLoading: true});
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data })
        } catch (error) {
            console.log("Error in useChatStore in getMessages: ", error)
            toast.error(error.response.data.message || "Error fetching Messages")
        }finally{
            set({isMessagesLoading : false})
        }
    },

    sendMessage: async (messageData) => {
        const {selectedUser, messages} = get();

        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
            set({ messages: [...messages, res.data]});
        } catch (error) {
            console.log("Error in useChatStore in setMessage: ", error);
            toast.error(error.response.data.message || "Error sending message");
        }
    },

    subscribeToMessages: () => {
        const { selectedUser } = get();
        if(!selectedUser) return;

        const socket = useAuthStore.getState().socket;

        
        // TODO: optimize this one later
        socket.on("newMessage", (newMessage) => {
            if(newMessage.senderId !== selectedUser._id) return; // only add message if it is from the selected user

            // add new message to messages array
            set({
                messages: [...get().messages, newMessage],
            })
        })
    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },

    // TODO: optimize this one later
    setSelectedUser: (selectedUser) => set({ selectedUser }),
}))