import api from './api';

// Fungsi untuk mengambil semua jenis limbah
export const fetchAllWaste = async () => {
  try {
    const response = await api.get('/waste');
    return response.data.data; // Mengembalikan data dari API
  } catch (error) {
    console.error('Error fetching waste types:', error);
    throw error; // Melempar error untuk ditangani di tempat lain
  }
};

