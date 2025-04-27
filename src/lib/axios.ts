// lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// You can also attach interceptors here if needed (for tokens, etc.)

export default axiosInstance;
