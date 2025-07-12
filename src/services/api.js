import axios from 'axios';

export const api = axios.create({
    baseURL:'http://localhost:3001'
});

api.interceptors.request.use((config) => {
    // const token = localStorage.getItem('token');
    const userData = localStorage.getItem('devburger:userData');

    const token = userData && JSON.parse(userData).token; // Verifica se tem algo no localstorage.

    config.headers.Authorization = `Bearer ${token}`;

    return config;
});