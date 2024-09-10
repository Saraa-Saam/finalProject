import { apiClient } from "../utils/axios";

export const getCartApi = () => apiClient.get("/cart").then((res) => res.data);

export const addItemCartApi = (id) =>
    apiClient
        .post("/cart/", {
            productId: id,
        })
        .then((res) => res.data);

export const updateItemCartApi = (id, count) =>
    apiClient
        .put(`/cart/${id}`, {
            count,
        })
        .then((res) => res.data);

export const deleteItemCartApi = (id, count) =>
    apiClient
        .delete(`/cart/${id}`, {
            count,
        })
        .then((res) => res.data);

export const clearCartApi = () =>
    apiClient.delete("/cart").then((res) => res.data);
