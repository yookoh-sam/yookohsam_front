import instance from "./axios";

export const getStoreById = async (storeId) => {
    const res = await instance.get(`/store/${storeId}`);
    return res.data;
}