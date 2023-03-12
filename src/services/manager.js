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
  //tao chuc vu
  createCV: async (data) => {
    try {
      const url = `/${MANAGER_API_PATH}/createCV`;
      return axiosClient.post(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // edit chức vụ
  editCV: async (MaChucVu, data) => {
    try {
      const url = `/${MANAGER_API_PATH}/updateCV/${MaChucVu}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // xoa chuc vu
  delCV: async (MaChucVu) => {
    try {
      const url = `/${MANAGER_API_PATH}/delCV/${MaChucVu}`;
      return axiosClient.delete(url);
    } catch (error) {
      console.log(error);
    }
  },
  // danh sách bac luong
  DSBL: async () => {
    try {
      const url = `/${MANAGER_API_PATH}/DSBL`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // tao bac luong moi
  createBL: async (data) => {
    try {
      const url = `/${MANAGER_API_PATH}/createMB`;
      return axiosClient.post(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // edit bac luong
  editBL: async (MaBac, data) => {
    try {
      const url = `/${MANAGER_API_PATH}/editMB/${MaBac}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // xoa bac luong
  delBL: async (MaBac) => {
    try {
      const url = `/${MANAGER_API_PATH}/delMB/${MaBac}`;
      return axiosClient.delete(url);
    } catch (error) {
      console.log(error);
    }
  },
  // danh sach hop dong lao dong
  DSHDLD: async () => {
    try {
      const url = `/${MANAGER_API_PATH}/DSHDLD`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // danh sach hop dong lao dong het han
  DSHDLDHH: async () => {
    try {
      const url = `/${MANAGER_API_PATH}/DSHDLDHH`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  //tao hợp đồng lao động
  createHDLD: async (data) => {
    try {
      const url = `/${MANAGER_API_PATH}/createHDLD`;
      return axiosClient.post(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // edit hợp dồng lao động
  editHDLD: async (MaHDLD, data) => {
    try {
      const url = `/${MANAGER_API_PATH}/editHDLD/${MaHDLD}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  //Khóa hợp dòng lao động
  lockHDLD: async (id) => {
    try {
      const url = `/${MANAGER_API_PATH}/huyHDLD/${id}`;
      return axiosClient.put(url);
    } catch (error) {
      console.log(error);
    }
  },
  unLockHDLD: async (id) => {
    try {
      const url = `/${MANAGER_API_PATH}/bohuyHDLD/${id}`;
      return axiosClient.put(url);
    } catch (error) {
      console.log(error);
    }
  },
  // edit hoc van
  editHV: async (MaHocVan, data) => {
    try {
      const url = `/${MANAGER_API_PATH}/updateHV/${MaHocVan}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // del hoc van
  delHV: async (MaHocVan) => {
    try {
      const url = `/${MANAGER_API_PATH}/delHV/${MaHocVan}`;
      return axiosClient.delete(url);
    } catch (error) {
      console.log(error);
    }
  },
  //tạo học vấn
  createHV: async (data) => {
    try {
      const url = `/${MANAGER_API_PATH}/createHV`;
      return axiosClient.post(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // dsnv con hoat dong
  NVHD: async () => {
    try {
      const url = `/${MANAGER_API_PATH}/NVHD`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // nhân viên không hợp đồng
  NVKHD: async () => {
    try {
      const url = `/${MANAGER_API_PATH}/NVKHD`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  KT: async () => {
    try {
      const url = `/${MANAGER_API_PATH}/TKCC`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // nhân viên chưa có hợp đồng
  NVCHD: async () => {
    try {
      const url = `/${MANAGER_API_PATH}/NVCHD`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // tài khoản chưa có thông tin
  NVNIF: async () => {
    try {
      const url = `/${MANAGER_API_PATH}/NVNIF`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // edit thông tin nhân viên
  editProfile: async (MaNV, data) => {
    try {
      const url = `/${MANAGER_API_PATH}/updateNV/${MaNV}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // danh sách học vấn
  DSHV: async () => {
    try {
      const url = `${MANAGER_API_PATH}/DSHV`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // danh sách công việc
  DSCV: async () => {
    try {
      const url = `${MANAGER_API_PATH}/DSCV`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // danh sách phiếu lương
  DSPL: async () => {
    try {
      const url = `${MANAGER_API_PATH}/DSPL`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // edit phiếu lương
  editPL: async (MaNV1, ThangTL1, NamTL1, data) => {
    try {
      const url = `/${MANAGER_API_PATH}/editPL/${MaNV1}/${ThangTL1}/${NamTL1}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // create phiếu lương
  createPL: async (data) => {
    try {
      const url = `/${MANAGER_API_PATH}/createPL`;
      return axiosClient.post(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // danh sách KTKL
  DSKTKL: async () => {
    try {
      const url = `${MANAGER_API_PATH}/DSKTKL`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // edit khen thưởng kỉ luật
  editKTKL: async (SoQD, data) => {
    try {
      const url = `/${MANAGER_API_PATH}/editKTKL/${SoQD}`;
      return axiosClient.put(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  //tạo học vấn
  createKTKL: async (data) => {
    try {
      const url = `/${MANAGER_API_PATH}/createKTKL`;
      return axiosClient.post(url, data);
    } catch (error) {
      console.log(error);
    }
  },
  // thong ke nhan vien nghi lam
  TKNVNL: async () => {
    try {
      const url = `${MANAGER_API_PATH}/TKNVNL`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // thong ke nhan vien dang lam
  TKNV: async () => {
    try {
      const url = `${MANAGER_API_PATH}/TKNV`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // thong ke nhan vien sap het hop dong
  TKNVSHH: async () => {
    try {
      const url = `${MANAGER_API_PATH}/TKNVSHH`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // thong ke nhan vien theo hoc van
  TKNVHV: async (MaHocVan) => {
    try {
      const url = `${MANAGER_API_PATH}/TKNVHV/${MaHocVan}`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  // thong ke nhan vien theo hoc van
  TKNVCV: async (MaChucVu) => {
    try {
      const url = `${MANAGER_API_PATH}/TKNVCV/${MaChucVu}`;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
};
export default ManagerAdmin;
