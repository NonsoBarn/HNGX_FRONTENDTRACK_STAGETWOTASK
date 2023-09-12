import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "613272dfd63a71398ee73255d9b01e1b",
  },
});

export default axiosInstance;
