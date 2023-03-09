import { USERS_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

const UserAdmin = {
  // hdld 1 nhan vien
  NVHDLD: async (MaNV) => {
    try {
      const url = `${USERS_API_PATH}/DSHDLDNV/${MaNV}`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  NVKTKL: async (MaNV) => {
    try {
      const url = `${USERS_API_PATH}/DSKTKLNV/${MaNV}`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  NVPL: async (MaNV) => {
    try {
      const url = `${USERS_API_PATH}/DSPLNV/${MaNV}`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  INFO: async (MaNV) => {
    try {
      const url = `${USERS_API_PATH}/info/${MaNV}`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  editIF: async (MaNV, data) => {
    try {
      const url = `${USERS_API_PATH}/editIF/${MaNV}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
};
export default UserAdmin;
