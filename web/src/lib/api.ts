import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.VITE_REQUEST_URL,
});
