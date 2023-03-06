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
export const routesUser = [];
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
];

export default routes;
