import { apiClient } from "../utils/axios";

export const getWishListApi = () =>
    apiClient.get("/wishlist").then((res) => res.data.data);

export const addItemWishListApi = (id) =>
    apiClient
        .post("/wishlist", {
            productId: id,
        })
        .then((res) => res.data.data);

export const deleteItemWishListApi = (id) =>
    apiClient.delete(`/wishlist/${id}`).then((res) => res.data.data);
