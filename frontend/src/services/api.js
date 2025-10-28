import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  // Your backend's base URL
  baseURL: 'http://localhost:5000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

/*
  This is an "interceptor". It's a function that runs *before* every API request
  is sent. It checks if we have a token in localStorage, and if so,
  it adds it to the 'Authorization' header.
*/
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Add the token to the header
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;