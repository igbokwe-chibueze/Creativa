// Note: In situations where the button toggling the theme is not mounted at the launch of the website,
// consider using the useThemeSwitcher hook directly instead of this component.

import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "../assets/Icons";

// Add this "darkMode: 'class'," to the tailwindConfig File, after content but before theme.

const ThemeSwitcher = () => {

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

  return (
    <div className="flex items-center space-x-2">
      
      <button
        onClick={toggleTheme}
      >
        {isDarkMode ? (
            // Render the first path(moon) when toggle is true
            <SunIcon className={"text-black bg-white rounded-full p-1"}/>
         ) : (
            // Render the second path(sun) when toggle is false
            <MoonIcon className={"text-white bg-black rounded-full p-1"}/>
        )}
      </button>
    </div>
  )
}

export default ThemeSwitcher