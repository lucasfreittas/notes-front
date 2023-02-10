import axios from 'axios';

export const api = axios.create({
    
    baseURL: 'https://api-rocketnotes-7rd9.onrender.com'
});