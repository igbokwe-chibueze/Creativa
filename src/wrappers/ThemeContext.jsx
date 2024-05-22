// ThemeContext
// Definition: ThemeContext is a React Context object. Context provides a way to pass data through the component tree without having 
// to pass props down manually at every level.
// Purpose: It is used to share the current theme state and the function to update the theme state across the entire application.

// ThemeProvider
// Definition: ThemeProvider is a React component that uses the ThemeContext.Provider to provide the current theme and a function 
// to change the theme to all its descendant components.
// Purpose: It initializes the theme state, manages changes to the theme, and makes the current theme and theme update function 
// available to all components that need it via the context.

/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { themes } from '../constants/Data'; // Import the themes array from Data.jsx

// Create a context for the theme
export const ThemeContext = createContext();

// Create a provider component for the theme context
export const ThemeProvider = ({ children }) => {
    // Extract the theme styles from the themes array
    const themeStyles = themes.map(theme => theme.theme);
    // Initialize state for the current theme style, defaulting to the first theme style
    const [themeStyle, setThemeStyle] = useState(themeStyles[0]);

    // useEffect to load the theme style from localStorage on initial mount
    useEffect(() => {
        const currentThemeStyle = localStorage.getItem('themeStyle');
        if (currentThemeStyle) {
            setThemeStyle(currentThemeStyle);
        }
    }, []);

    // Function to update the theme style based on the index and save it to localStorage
    const setThemeStyleByIndex = (index) => {
        const newThemeStyle = themeStyles[index % themeStyles.length];
        setThemeStyle(newThemeStyle);
        localStorage.setItem('themeStyle', newThemeStyle);
    };

    return (
        // Provide the current theme style, the function to change it, and the themes array to the context
        <ThemeContext.Provider value={{ themeStyle, setThemeStyleByIndex, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};
