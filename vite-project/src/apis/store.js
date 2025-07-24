import axiosInstance from "./axios";

export const getStoreById = async (storeId) => {
  const res = await axiosInstance.get(`/store/${storeId}`);
  console.log(res.data);
  return res.data;
};

export const getReviewById = async (storeId) => {
  const res = await axiosInstance.get(`/store/${storeId}/reviews`);
  return res.data;
};
