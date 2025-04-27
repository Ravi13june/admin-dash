import axiosInstance from "@/lib/axios";


export const autoDealershipService = {
  getAllAutoDealership: () => axiosInstance.get(`/AutoDealerShip/allAutoDealerShip`),
  getUser: (id: string) => axiosInstance.get(`/users/${id}`),
  deleteUser: (id: string) => axiosInstance.delete(`/users/${id}`),
};
