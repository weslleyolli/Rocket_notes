import axios from 'axios'

export const api = axios.create({
    baseURL: "https://rocket-notes-backend-1.onrender.com"
});