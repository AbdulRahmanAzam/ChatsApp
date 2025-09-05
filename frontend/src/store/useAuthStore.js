import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigningUp: false,
    isLogginIn: false,
    isUpdatingProfile: false,
    isCheckingAuth:true,
    onlineUsers: [],
    socket: null,

    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({authUser:res.data});
            get().connectSocket();
        } catch (error) {
            console.log("Error in useAuthStore in checking auth:", error);
            set({authUser:null});
            
        }finally{
            set({isCheckingAuth: false});
        }
    },

    signup: async (data) => {
        set({isSigningUp: true});

        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({authUser:res.data});
            toast.success("Account created successfully");
            get().connectSocket();

        } catch (error) {
            console.log("Error in useAuthStore in signup:", error);
            toast.error(error?.response?.data?.message || "Error during signup");
        }finally {
            set({isSigningUp: false});
        }
    },
    login: async (data) => {
        set({isLogginIn: true})
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({authUser: res.data})
            toast.success("Logged in Successfully")

            get().connectSocket();
        } catch (error) {
            console.log("Error in useAuthStore in login:", error);
            toast.error(error?.response?.data?.message || "Error during login");
        }finally {
            set({isLogginIn: false})
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser: null});
            toast.success("Logged out successfully");
            get().disconnectSocket();
        } catch (error) {
            console.log("Error in useAuthStore in logout:", error);
            toast.error(error?.response?.data?.message || "Error during logout");
        }finally {
            set({isLoggingOut: false});
        }
    },

    updateProfile: async (data) => {
        set({isUpdatingProfile: true});
        try {
            const res = await axiosInstance.put("/auth/update-profile", data);
            set({authUser: res.data});
            toast.success("Profile updated successfully");
        } catch (error) {
            console.log("Error in useAuthStore in updateProfile:", error);
            toast.error(error?.response?.data?.message || "Error updating profile");
        }finally{
            set({isUpdatingProfile: false});
        }
    },

    connectSocket: () => {
        const {authUser} =get();
        if(!authUser || get().socket?.connected) return;

        const socket = io(BASE_URL, {
            query: {userId: authUser._id}
        });
        socket.connect();

        set({socket: socket}); // for the disconnectSocket function

        socket.on("getOnlineUsers", (userIds) => { // the name must be same as the backend
            set({ onlineUsers: userIds})
        })
    },
    disconnectSocket: () => {
        if(get().socket?.connected) get().socket.disconnect();
    },
}))