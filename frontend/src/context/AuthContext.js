import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Get user from localStorage on initial load
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken && !user) { // Only check if user isn't already set
        try {
          setToken(storedToken);
          const { data } = await api.get('/user/profile');
          setUser(data.user);
          localStorage.setItem('user', JSON.stringify(data.user));
        } catch (error) {
          console.error("Invalid token, logging out.");
          logout();
        }
      }
      setLoading(false);
    };
    checkUser();
  }, []); // Only run on mount

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
    navigate('/dashboard');
  };

  const signup = async (userData) => {
    const { data } = await api.post('/auth/signup', userData);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    navigate('/');
  };

  // --- THIS IS THE UPDATED FUNCTION ---
  const updateProfile = async (profileData) => {
    try {
      // 1. Send data to the backend.
      //    The backend will only save what it's configured for (name, age, etc.)
      const { data } = await api.put('/user/profile', profileData);

      // 2. data.user is the *truth* from the database.
      // 3. We merge this with the *full* profileData from the form
      //    to keep extra fields (like 'gender', 'country') in our local state.
      const updatedUser = { ...user, ...profileData, ...data.user };
      
      // 4. Update state and localStorage with the complete merged data
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return data.message;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error; // Re-throw the error so the form can catch it
    }
  };
  // --- END OF UPDATE ---

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated: !!user,
        loading,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;