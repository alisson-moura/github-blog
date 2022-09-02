import axios from "axios";

const token = ''
export const apiClient = axios.create({
    baseURL: 'https://api.github.com',
    headers: { 'Authorization': `bearer ${token}` }
})