import { create } from 'zustand';

// Safely access localStorage to avoid SSR issues
const getThemeFromStorage = () => {
    try {
        return localStorage.getItem("chat-theme") || "coffee";
    } catch {
        return "coffee";
    }
};

export const useThemeStore = create((set) => ({
    theme: getThemeFromStorage(),
    setTheme: (theme) => {
        try {
            localStorage.setItem("chat-theme", theme);
        } catch {
            console.error("Could not save theme to localStorage");
        }
        set({ theme });
    },
}))