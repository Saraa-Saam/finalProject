import { apiClient } from "../utils/axios";

export const getCategoriesApi = () =>
    apiClient.get("/categories").then((res) => res.data.data);