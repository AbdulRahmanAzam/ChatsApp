import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://chatsapp-backend.vercel.app';
console.log("Using backend URL:", BASE_URL);

export const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api`,
    withCredentials: true, // to send cookies with requests
    headers: {
        'Content-Type': 'application/json'
    }
})