import { baseUrl } from "@/app/utlis/baseUrl";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: baseUrl,

});

export default axiosClient;
