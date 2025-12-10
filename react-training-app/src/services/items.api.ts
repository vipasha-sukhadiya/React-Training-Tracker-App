import api from "./apiClient";

export interface Item {
  id: number;
  name: string;
  price: number;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ITEMS_ENDPOINT = `${BASE_URL}/items`;

export const itemsApi = {
  list: async (): Promise<Item[]> => {
    const response = await api.get(ITEMS_ENDPOINT);
    return response.data;
  },

  getById: async (id: number): Promise<Item> => {
    const response = await api.get(`${ITEMS_ENDPOINT}/${id}`);
    return response.data;
  },

  create: async (item: Item): Promise<Item> => {
    const response = await api.post(ITEMS_ENDPOINT, item);
    return response.data;
  },

  update: async (id: number, item: Partial<Item>): Promise<Item> => {
    const response = await api.put(`${ITEMS_ENDPOINT}/${id}`, item);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`${ITEMS_ENDPOINT}/${id}`);
  },
};
