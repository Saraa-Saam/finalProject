import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://ecommerce.routemisr.com/api/v1",
});

const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common["token"] = token;
    } else {
        delete apiClient.defaults.headers.common["token"];
    }
};

export { apiClient, setAuthToken };
