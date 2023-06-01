import { ADMIN_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

const AdminService = {
  register: async (data) => {
    try {
      const url = `/${ADMIN_API_PATH}/register/${data.MaNV}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  acountList: async () => {
    try {
      const url = `/${ADMIN_API_PATH}/acountlist`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  quyen: async () => {
    try {
      const url = `/${ADMIN_API_PATH}/role`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  acountEdit: async (MaNV, data) => {
    try {
      const url = `/${ADMIN_API_PATH}/update/${MaNV}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  lock: async (MaNV) => {
    try {
      return axiosClient.put(`${ADMIN_API_PATH}/acountlock/${MaNV}`);
    } catch (error) {
      console.log(error);
    }
  },
  unLock: async (MaNV) => {
    try {
      return axiosClient.put(`${ADMIN_API_PATH}/acountunlock/${MaNV}`);
    } catch (error) {
      console.log(error);
    }
  },
};

export default AdminService;
