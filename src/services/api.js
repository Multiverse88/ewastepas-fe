// src/services/api.js
import axios from 'axios';

// Membuat instance Axios dengan baseURL
const api = axios.create({
  baseURL: 'https://ewastepas-user.vercel.app/api', // Ganti dengan base URL yang sesuai
});

// Menambahkan header x-api-key ke instance
const API_KEY = 'kunci-rahasia-api'; // Ganti dengan nilai API Key yang sesuai
api.defaults.headers.common['x-api-key'] = API_KEY;

// Mengatur interceptor jika diperlukan (opsional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
