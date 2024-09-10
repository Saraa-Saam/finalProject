import { apiClient } from "../utils/axios";

export const loginApi = (values) => apiClient.post("/auth/signin", values);

export const registerApi = (values) => apiClient.post("/auth/signup", values);

export const forgetPasswordApi = (values) =>
    apiClient.post("/auth/forgotPasswords", values);

export const verifyResetCodeApi = (values) =>
    apiClient.post("/auth/verifyResetCode", values);

export const resetPasswordApi = (values) =>
    apiClient.put("/auth/resetPassword", values);
