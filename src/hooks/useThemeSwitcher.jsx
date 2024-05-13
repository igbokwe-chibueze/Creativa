// Note: If you need to mount the toggle button at the launch of the website,
// consider using the ThemeSwitcher component directly instead of this hook.

import { useState, useEffect } from "react";

// Add this "darkMode: 'class'," to the tailwindConfig File, after content but before theme.
const useThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      // Use local storage to remember the user's theme preference
      const storedTheme = localStorage.getItem("theme");
      
      // Check for system's preferred theme
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else if (storedTheme === "light") {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      } else if (prefersDarkMode) {
        // Set theme based on system preference
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      }
    }, []);
  
    const toggleTheme = () => {
      if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
      setIsDarkMode(!isDarkMode);
    };
  
    return { isDarkMode, toggleTheme };
}

export default useThemeSwitcher