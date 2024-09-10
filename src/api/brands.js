import { apiClient } from "../utils/axios";

export const getBrandsApi = () =>
    apiClient.get("/brands").then((res) => res.data.data);


