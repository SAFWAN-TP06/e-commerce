import axiosClient from "./config/axios.Config";

type Tloginscheme = {
  name?: string;
  email: string;
  password: string;
  confirmpassword?: string;
};

export const frontEndHome = {
  homepageApi: async function () {
    return await axiosClient.get("home");
  },
  categoryApi: async function () {
    return await axiosClient.get("categories");
  },
  productApi: async function (id: string) {
    return await axiosClient.get(`products/${id}`);
  },
  singleProductApi: async function (id: string) {
    return await axiosClient.get(`products/single/${id}`);
  },
  signUpApi: async function (data: Tloginscheme) {
    return await axiosClient.post("auth/signup", data);
  },
  loginApi: async function (data: Tloginscheme) {
    return await axiosClient.post("auth/login", data);
  },
};
