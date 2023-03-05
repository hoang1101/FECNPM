import { NOTIFICATION_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const NotificationService = {
  getNotificationByPage: async (params) => {
    try {
      // console.log(`${routerLinks(UserService.nameLink, 'api')}/login`);
      return axiosClient.get(
        `${NOTIFICATION_API_PATH}/get/notifications?page=${params.page}&limit=${params.amount}${params.search}`
      );
    } catch (e) {
      console.error(e);
      if (e.response.message) {
        Message.error({ text: e.response.message });
      }
      return false;
    }
  },
  getNotificationCountPage: async () => {
    try {
      // console.log(`${routerLinks(UserService.nameLink, 'api')}/login`);
      return axiosClient.get(`${NOTIFICATION_API_PATH}/get/pageNumbers/10`);
    } catch (e) {
      console.error(e);
      if (e.response.message) {
        Message.error({ text: e.response.message });
      }
      return false;
    }
  },
  getNotificationDetail: async (id) => {
    try {
      // console.log(`${routerLinks(UserService.nameLink, 'api')}/login`);
      return axiosClient.get(`${NOTIFICATION_API_PATH}/get/notification/${id}`);
    } catch (e) {
      console.error(e);
      if (e.response.message) {
        Message.error({ text: e.response.message });
      }
      return false;
    }
  },
  getListUsersCreatedNotification: async () => {
    try {
      // console.log(`${routerLinks(UserService.nameLink, 'api')}/login`);
      return axiosClient.get(`${NOTIFICATION_API_PATH}/get/sendUsers`);
    } catch (e) {
      console.error(e);
      if (e.response.message) {
        Message.error({ text: e.response.message });
      }
      return false;
    }
  },
  createNotification: async (data, isSchedule, dateSchedule) => {
    try {
      return axiosClient.post(
        `${NOTIFICATION_API_PATH}/create/notification?is_schedule=${isSchedule}&${dateSchedule}`,
        data
      );
    } catch (e) {
      console.error(e);
      if (e.response.message) {
        Message.error({ text: e.response.message });
      }
      return false;
    }
  },
  updateNotification: async (data, id, sentNow, dateSchedule) => {
    try {
      return axiosClient.put(
        `${NOTIFICATION_API_PATH}/update/notification?id=${id}${sentNow}${dateSchedule}`,
        data
      );
    } catch (e) {
      console.error(e);
      if (e.response.message) {
        Message.error({ text: e.response.message });
      }
      return false;
    }
  },
  deleteNotification: async (id) => {
    try {
      return axiosClient.delete(
        `${NOTIFICATION_API_PATH}/delete/notification/${id}`
      );
    } catch (e) {
      console.log(e);
      if (e.response.message) {
        Message.error({ text: e.response.message });
      }
      return false;
    }
  },
};
