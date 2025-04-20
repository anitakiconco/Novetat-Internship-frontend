// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // your backend URL
});

export const getProjects = () => api.get('/projects');
// export const createProject = (data) => api.post('/projects', data);
export const createProject = (data) => api.post('/create', data); // matches your backend route
export const getTasks = (projectId) => api.get(`/projects/${projectId}/tasks`);
export const addTask = (projectId, task) => api.post(`/projects/${projectId}/tasks`, task);
export const markTaskAsDone = (taskId) => api.patch(`/tasks/${taskId}/done`);
