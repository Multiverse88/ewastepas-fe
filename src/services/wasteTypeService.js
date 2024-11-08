import api from './api';

// Fungsi untuk mengambil semua jenis limbah
export const fetchAllWasteTypes = async () => {
  try {
    const response = await api.get('/waste-type');
    return response.data.data; // Mengembalikan data dari API
  } catch (error) {
    console.error('Error fetching waste types:', error);
    throw error; // Melempar error untuk ditangani di tempat lain
  }
};

// Fungsi untuk menambah jenis limbah
export const addWasteType = async (wasteTypeName) => {
  try {
    const response = await api.post('/waste-type', { waste_type_name: wasteTypeName });
    return response.data; // Mengembalikan response dari API
  } catch (error) {
    console.error('Error adding waste type:', error);
    throw error; // Melempar error untuk ditangani di tempat lain
  }
};
