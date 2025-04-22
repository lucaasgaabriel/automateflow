import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getWorkflows = () => api.get("/workflows");
export const createWorkflow = (data) => api.post("/workflows", data);
export const updateWorkflow = (id, data) => api.put(`/workflows/${id}`, data);
export const deleteWorkflow = (id) => api.delete(`/workflows/${id}`);