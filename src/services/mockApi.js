import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5ef8b4448e584a00163d9a9c.mockapi.io/api/v1',
});

export default api;
