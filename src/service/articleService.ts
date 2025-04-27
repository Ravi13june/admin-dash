import axiosInstance from "@/lib/axios";


export const articleService = {
  getArticles: (page:number,pageSize:number) => axiosInstance.get(`/Article/getArticle?search=&fromDate=&toDate=&page=${page}&limit=${pageSize}`),
  getUser: (id: string) => axiosInstance.get(`/users/${id}`),
  deleteUser: (id: string) => axiosInstance.delete(`/users/${id}`),
};
