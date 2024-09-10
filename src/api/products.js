import { apiClient } from "../utils/axios";

export const getProductsApi = () =>
    apiClient.get("/products").then((res) => res.data.data);

export const getProductApi = (id) =>
    apiClient.get(`/products/${id}`).then((res) => res.data.data);
