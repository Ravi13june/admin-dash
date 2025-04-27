import axiosInstance from "@/lib/axios";


export const autoDealershipService = {
  getAllAutoDealership: () => axiosInstance.get(`/AutoDealerShip/allAutoDealerShip`),
  getUser: (id: string) => axiosInstance.get(`/users/${id}`),
  createUser: (data: any) => axiosInstance.post("/users", data),
  updateUser: (id: string, data: any) => axiosInstance.put(`/users/${id}`, data),
  deleteUser: (id: string) => axiosInstance.delete(`/users/${id}`),
};
