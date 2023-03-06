import { useAuth } from "@/context/AuthProvider";
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
const LayoutAdmin = [
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
];
const LayoutManager = [
  {
    label: "Quản lý nhân viên",
    icon: <TeamOutlined />,

    children: [
      {
        label: "Danh sách nhân viên",
        key: "DSNV",
        icon: <ContactsOutlined />,
      },
      {
        label: "Tạo hồ sơ",
        key: "Profile",
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
const LayoutUser = [
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
const Layout = [
  {
    label: "Dashboard",
    key: "Dashboard",
    icon: <HomeOutlined />,
  },
];

const Out = () => {
  const auth = useAuth();
  let R = null;
  if (auth?.user?.role === 1) {
    R = [...Layout, ...LayoutAdmin];
  } else if (auth?.user?.role === 2) {
    R = [...Layout, ...LayoutManager];
  } else {
    R = [...Layout, ...LayoutUser];
  }
  return R;
};
export default Out;
