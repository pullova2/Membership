import axios, { AxiosResponse, AxiosError } from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://1qvioybrz1.execute-api.us-east-1.amazonaws.com/api/",
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(
      `intercepted response>> Url:${response.config.url}`,
      response.data
    );

    return response.data;
  },
  (err: AxiosError) => {
    console.log(`Error from >> Url:${err.config?.url}`);
    console.log(err);

    console.log("message", err.message);
    console.log("code", err.code);
    throw err.response;
    return err.response;
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("error:", err);
  }
);
