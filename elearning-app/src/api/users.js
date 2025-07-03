import axios from 'axios';

const API_BASE = "http://localhost:5000/api";

export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_BASE}/auth/register`, userData);
    return res.data;
  } catch (err) {
    console.error("Eroare la înregistrare:", err);
    throw err;
  }
};

export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${API_BASE}/auth/login`, credentials);
    return res.data;
  } catch (err) {
    console.error("Eroare la login:", err);
    throw err;
  }
};

export const resetPassword = async ({ email, oldPassword, newPassword }) => {
  try {
    const res = await axios.put(`${API_BASE}/users/reset-password`, {
      email,
      oldPassword,
      newPassword
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
export const getUserById = async (id) => {
  try {
    const res = await axios.get(`${API_BASE}/users/${id}`);
    return res.data;
  } catch (err) {
    console.error("Eroare la getUserById:", err);
    throw err;
  }
};

export const updateUser = async (id, updatedData) => {
  try {
    const res = await axios.put(`${API_BASE}/users/${id}`, updatedData);
    return res.data;
  } catch (err) {
    console.error("Eroare la updateUser:", err);
    throw err;
  }
};
