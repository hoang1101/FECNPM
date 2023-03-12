import { DashboardOutlined } from "@ant-design/icons";
import React, { lazy } from "react";
import routerLinks from "@/utils/router-links";
export const routesAdmin = [
  {
    label: "Account",
    path: routerLinks("moreaccount"),
    component: React.lazy(() => import("@/pages/Account")),
  },
  {
    label: "AccountList",
    path: routerLinks("accountlist"), // key ben router link
    component: React.lazy(() => import("@/pages/Account/accountList")),
  },
  {
    label: "Edit",
    path: routerLinks("editAcount"), // key ben router link
    component: React.lazy(() => import("@/pages/Account/edit")),
  },
];
export const routesUser = [
  {
    label: "NVHDLD",
    path: routerLinks("NVHDLD"), // key ben router link
    component: React.lazy(() => import("@/pages/User/DSHDLD")),
  },
  {
    label: "NVKTKL",
    path: routerLinks("NVKTKL"), // key ben router link
    component: React.lazy(() => import("@/pages/User/NVKTKL")),
  },
  {
    label: "NVPL",
    path: routerLinks("NVPL"), // key ben router link
    component: React.lazy(() => import("@/pages/User/NVPL")),
  },
  {
    label: "TTCN",
    path: routerLinks("TTCN"), // key ben router link
    component: React.lazy(() => import("@/pages/User/TTNV")),
  },
];
export const routesManager = [
  {
    label: "DSNV",
    path: routerLinks("DSNV"),
    component: React.lazy(() => import("@/pages/NhanVien/index")),
  },
  {
    label: "profile",
    path: routerLinks("Profile"), // key router-Links
    component: React.lazy(() => import("@/pages/NhanVien/taoNVmoi")),
  },
  {
    label: "EditProfile",
    path: routerLinks("editProfile"), // key ben router link
    component: React.lazy(() => import("@/pages/NhanVien/EditProfile")),
  },
  {
    label: "DSCV",
    path: routerLinks("DSCV"), // key ben router link
    component: React.lazy(() => import("@/pages/ChucVu/index")),
  },
  {
    label: "EditCV",
    path: routerLinks("editCV"), // key ben router link
    component: React.lazy(() => import("@/pages/ChucVu/editCV")),
  },
  {
    label: "CreateCV",
    path: routerLinks("createCV"), // key ben router link
    component: React.lazy(() => import("@/pages/ChucVu/createCV")),
  },
  {
    label: "DSBL",
    path: routerLinks("DSBL"), // key ben router link
    component: React.lazy(() => import("@/pages/BacLuong/index")),
  },
  {
    label: "CreateBL",
    path: routerLinks("createBL"), // key ben router link
    component: React.lazy(() => import("@/pages/BacLuong/createBL")),
  },
  {
    label: "editBL",
    path: routerLinks("editBL"), // key ben router link
    component: React.lazy(() => import("@/pages/BacLuong/editBL")),
  },
  {
    label: "DSHDLD",
    path: routerLinks("DSHDLD"), // key ben router link
    component: React.lazy(() => import("@/pages/HDLD/tab")),
  },
  {
    label: "editHDLD",
    path: routerLinks("editHDLD"), // key ben router link
    component: React.lazy(() => import("@/pages/HDLD/editHDLD")),
  },
  {
    label: "createHDLD",
    path: routerLinks("createHDLD"), // key ben router link
    component: React.lazy(() => import("@/pages/HDLD/createHDLD")),
  },
  {
    label: "DSHV",
    path: routerLinks("DSHV"), // key ben router link
    component: React.lazy(() => import("@/pages/HocVan/index")),
  },
  {
    label: "editHV",
    path: routerLinks("editHV"), // key ben router link
    component: React.lazy(() => import("@/pages/HocVan/editHV")),
  },
  {
    label: "createHV",
    path: routerLinks("createHV"), // key ben router link
    component: React.lazy(() => import("@/pages/HocVan/createHV")),
  },
  {
    label: "DSPL",
    path: routerLinks("DSPL"), // key ben router link
    component: React.lazy(() => import("@/pages/PhieuLuong/index")),
  },
  {
    label: "editPL",
    path: routerLinks("editPL"), // key ben router link
    component: React.lazy(() => import("@/pages/PhieuLuong/editPL")),
  },
  {
    label: "createPL",
    path: routerLinks("createPL"), // key ben router link
    component: React.lazy(() => import("@/pages/PhieuLuong/createPL")),
  },
  {
    label: "DSKTKL",
    path: routerLinks("DSKTKL"), // key ben router link
    component: React.lazy(() => import("@/pages/KTKL/index")),
  },
  {
    label: "editKTKL",
    path: routerLinks("editKTKL"), // key ben router link
    component: React.lazy(() => import("@/pages/KTKL/editKTKL")),
  },
  {
    label: "createKTKL",
    path: routerLinks("createKTKL"), // key ben router link
    component: React.lazy(() => import("@/pages/KTKL/createKTKL")),
  },
  {
    label: "THONGKE",
    path: routerLinks("THONGKE"), // key ben router link
    component: React.lazy(() => import("@/pages/ThongKe/ds")),
  },
];
const routes = [
  {
    label: "Login",
    path: routerLinks("Login"),
    componen: React.lazy(() => import("@/pages/Auth/Login")),
  },
  {
    label: "dashboard",
    path: routerLinks("Dashboard"),
    component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
  },
  {
    label: "Đổi mật Khẩu",
    path: routerLinks("ChangePassword"),
    component: React.lazy(() => import("@/pages/Auth/ChangePassword")),
  },
];

export default routes;
