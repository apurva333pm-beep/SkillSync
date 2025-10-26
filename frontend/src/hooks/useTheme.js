import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

// Custom hook to easily access theme state and toggle function
export const useTheme = () => {
  return useContext(ThemeContext);
};