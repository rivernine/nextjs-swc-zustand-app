import axios from "axios";

const axiosConfig = () => {
  axios.defaults.baseURL = process.env.BASE_URL;
}

export default axiosConfig;