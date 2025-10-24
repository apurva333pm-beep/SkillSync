import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

// Create the context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true); // For checking auth on page load
  const navigate = useNavigate();

  // Effect to run on component mount to check if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          // Set token for api calls
          setToken(storedToken);
          
          // Fetch user profile to validate token and get user data
          // This matches your backend's GET /api/user/profile route
          const { data } = await api.get('/user/profile');
          setUser(data.user);

        } catch (error) {
          // If token is invalid (expired, etc.)
          console.error("Invalid token, logging out.");
          logout();
        }
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  // Login function
  const login = async (email, password) => {
    // Calls your POST /api/auth/login endpoint
    const { data } = await api.post('/auth/login', { email, password });
    
    // Store token and user data
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user)); // Store user details
    setToken(data.token);
    setUser(data.user);

    // Redirect to dashboard
    navigate('/dashboard');
  };

  // Signup function
  const signup = async (userData) => {
    // Calls your POST /api/auth/signup endpoint
    // userData should contain: name, email, password, education_level, interests
    const { data } = await api.post('/auth/signup', userData);
    return data; // Return success message
  };

  // Logout function
  const logout = () => {
    // Clear everything
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    
    // Redirect to login page
    navigate('/login');
  };

  // Update profile function
  const updateProfile = async (profileData) => {
    // Calls your PUT /api/user/profile endpoint
    const { data } = await api.put('/user/profile', profileData);
    
    // Update local user state and localStorage
    setUser(data.user);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data.message; // Return success message
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated: !!user, // True if 'user' is not null
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