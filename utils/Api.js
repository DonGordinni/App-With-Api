import axios from 'axios';

const api = axios.create({
    baseURL: "https://630a4f35f280658a59cd3c31.mockapi.io",
});

export default api;