import { MANAGER_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

const ManagerAdmin = {
  // tao tai khoan
  createNV: async (data) => {
    try {
      const url = `/${MANAGER_API_PATH}/createNV`;
      return axiosClient.post(url, data);
    } catch (error) {
      console.log(error);
    }
  },

  NVHD: async () => {
    try {
      const url = `/${MANAGER_API_PATH}/NVHD`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  NVKHD: async () => {
    try {
      const url = `/${MANAGER_API_PATH}/NVKHD`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  editProfile: async (MaNV, data) => {
    try {
      const url = `/${MANAGER_API_PATH}/updateNV/${MaNV}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  DSHV: async () => {
    try {
      const url = `${MANAGER_API_PATH}/DSHV`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  DSCV: async () => {
    try {
      const url = `${MANAGER_API_PATH}/DSCV`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
};
export default ManagerAdmin;
