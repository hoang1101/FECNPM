import {
  ApartmentOutlined,
  AuditOutlined,
  BarChartOutlined,
  ContactsOutlined,
  DatabaseOutlined,
  DollarOutlined,
  FileAddOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  TeamOutlined,
  UserAddOutlined,
  WalletOutlined,
} from "@ant-design/icons";
// import { Books, BellRing, Stack, User } from '@/assets';
const Layout = [
  {
    label: "Dashboard",
    key: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    label: "Quản lý tài khoản",
    icon: <FolderOpenOutlined />,
    children: [
      {
        label: "Tạo tài khoản",
        key: "moreaccount",
        icon: <UserAddOutlined />,
      },
      {
        label: "Danh sách tài khoản",
        key: "accountlist",
        icon: <TeamOutlined />,
      },
    ],
  },
  {
    label: "Quản lý nhân viên",
    icon: <TeamOutlined />,

    children: [
      {
        label: "Danh sách nhân viên",
        key: "employeelist",
        icon: <ContactsOutlined />,
      },
      {
        label: "Tạo hồ sơ",
        key: "profile",
        icon: <FileAddOutlined />,
      },
    ],
  },
  {
    label: "Quản lý lương",
    icon: <BarChartOutlined />,
    children: [
      {
        label: "Bảng lương nhân viên",
        key: "payroll",
        icon: <DatabaseOutlined />,
      },
      {
        label: "Bảng mã lương",
        key: "salarycode",
        icon: <DollarOutlined />,
      },
    ],
  },
  {
    label: "Quản lý bộ phận",
    icon: <ApartmentOutlined />,
    children: [
      {
        label: "Bộ Phận",
        key: "part",
        icon: <AuditOutlined />,
      },
      {
        label: "Chức Vụ",
        key: "position",
        icon: <ContactsOutlined />,
      },
    ],
  },
  {
    label: "Sổ Bảo Hiểm",
    icon: <WalletOutlined />,
    children: [
      {
        label: "Tao hoc van",
        key: "hocvan",
        icon: <AuditOutlined />,
      },
      {
        label: "Chức Vụ",
        key: "position",
        icon: <ContactsOutlined />,
      },
    ],
  },
];
export default Layout;
