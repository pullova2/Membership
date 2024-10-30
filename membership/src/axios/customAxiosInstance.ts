import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://1qvioybrz1.execute-api.us-east-1.amazonaws.com/api/",
  timeout: 10000,
});

// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response.data;
//   },
//   (err: AxiosError) => {
//     return err.response?.data;
//   }
// );
