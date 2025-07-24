import axiosInstance from "./axios";

export const getStoreById = async (storeId) => {
    const res = await axiosInstance.get(`/store/${storeId}`);
    return res.data;
}

export const getReviewById = async (storeId) => {
    const res = await axiosInstance.get(`/store/${storeId}/review`);
    return res.data;
}