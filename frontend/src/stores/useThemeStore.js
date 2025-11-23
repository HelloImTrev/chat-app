import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("myChat-theme") || "dark",
  setTheme: (newTheme) => {
    localStorage.setItem("myChat-theme", newTheme);
    set({ theme: newTheme });
  },
}));
