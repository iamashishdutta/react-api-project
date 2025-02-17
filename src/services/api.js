import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchItems = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const fetchItemById = async (id) => {
  const response = await axios.get(`${BASE_URL}/users/${id}`);
  return response.data;
};
