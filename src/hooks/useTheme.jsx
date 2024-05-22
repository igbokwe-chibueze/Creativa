import { useContext } from 'react';
import { ThemeContext } from '../wrappers/ThemeContext'; // Import the ThemeContext

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
