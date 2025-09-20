import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: (email, password) => api.post("/login", { email, password }),
  register: (email, password, role) =>
    api.post("/users", { email, password, role }),
};

export const userService = {
  getCurrentUser: () => api.get("/users/me"),
  register: (userData) => api.post("/register", userData),
};

export const doctorService = {
  getDoctors: () => api.get("/doctors"),
  getDoctor: (id) => api.get(`/doctors/${id}`),
  createDoctor: (data) => api.post("/doctors", data),
  updateDoctor: (id, data) => api.put(`/doctors/${id}`, data),
  deleteDoctor: (id) => api.delete(`/doctors/${id}`),
};

export const patientService = {
  getPatients: () => api.get("/patients"),
  getPatient: (id) => api.get(`/patients/${id}`),
  createPatient: (data) => api.post("/patients", data),
  updatePatient: (id, data) => api.put(`/patients/${id}`, data),
  deletePatient: (id) => api.delete(`/patients/${id}`),
};

export const appointmentService = {
  getAppointments: () => api.get("/appointments"),
  getAppointment: (id) => api.get(`/appointments/${id}`),
  createAppointment: (data) => api.post("/appointments", data),
  updateAppointment: (id, data) => api.put(`/appointments/${id}`, data),
  deleteAppointment: (id) => api.delete(`/appointments/${id}`),
};

export default api;
