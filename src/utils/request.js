import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
});
//请求拦截器
request.interceptors.request.use((config) => {
  return config;
});
request.interceptors.response.use(
  (res) => {
    // console.log(res);
    return res.data;
  },
  (error) => {
    // console.log(err);
    console.log(error.response);
    return Promise.reject(error);
  }
);
export default request;
