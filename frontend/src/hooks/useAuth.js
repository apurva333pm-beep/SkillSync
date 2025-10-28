import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

// Custom hook to easily access auth state and functions
export const useAuth = () => {
  return useContext(AuthContext);
};