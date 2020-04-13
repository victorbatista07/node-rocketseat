import axios from 'axios';

// a baseURL serve para definir a URL que irár retornar todas as requisições
const api = axios.create({
    baseURL: 'https://api.github.com'
});

export default api;
