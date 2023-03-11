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
        label: "Tạo hồ sơ",
        key: "Profile",
        icon: <FileAddOutlined />,
      },
      {
        label: "Danh sách nhân viên",
        key: "DSNV",
        icon: <ContactsOutlined />,
      },
    ],
  },
  {
    label: "Quản lý HDLD",
    icon: <BarChartOutlined />,
    children: [
      {
        label: "Tạo HDLD",
        key: "createHDLD",
        icon: <DatabaseOutlined />,
      },
      {
        label: "Danh sách HDLD",
        key: "DSHDLD",
        icon: <DollarOutlined />,
      },
    ],
  },
  {
    label: "Quản lý KTKL",
    icon: <BarChartOutlined />,
    children: [
      {
        label: "Tạo KTKL",
        key: "createKTKL",
        icon: <DollarOutlined />,
      },
      {
        label: "Danh sách KTKL",
        key: "DSKTKL",
        icon: <DatabaseOutlined />,
      },
    ],
  },
  {
    label: "Quản lý phiếu lương",
    icon: <BarChartOutlined />,
    children: [
      {
        label: "Tạo phiếu lương",
        key: "createPL",
        icon: <DollarOutlined />,
      },
      {
        label: "Danh sách phiếu lương",
        key: "DSPL",
        icon: <DatabaseOutlined />,
      },
    ],
  },
  {
    label: "Quản lý bậc lương",
    icon: <ApartmentOutlined />,
    children: [
      {
        label: "Tạo bậc lương",
        key: "createBL",
        icon: <AuditOutlined />,
      },
      {
        label: "Danh sách bậc lương",
        key: "DSBL",
        icon: <ContactsOutlined />,
      },
    ],
  },
  {
    label: "Quản lý chức vụ",
    icon: <WalletOutlined />,
    children: [
      {
        label: "Tạo chức vụ",
        key: "createCV",
        icon: <AuditOutlined />,
      },
      {
        label: "Danh sách chức vụ",
        key: "DSCV",
        icon: <ContactsOutlined />,
      },
    ],
  },
  {
    label: "Quản lý học vấn",
    icon: <WalletOutlined />,
    children: [
      {
        label: "Tạo học vấn",
        key: "createHV",
        icon: <AuditOutlined />,
      },
      {
        label: "Danh sách học vấn",
        key: "DSHV",
        icon: <ContactsOutlined />,
      },
    ],
  },
  {
    label: "Thống kê",
    key: "THONGKE",
    icon: <AuditOutlined />,
  },
];
const LayoutUser = [
  {
    label: "Thông tin cá nhân",
    key: "TTCN",
    icon: <WalletOutlined />,
  },
  {
    label: "Phiếu lương",
    key: "NVPL",
    icon: <AuditOutlined />,
  },
  {
    label: "Khen thưởng kỉ luật",
    key: "NVKTKL",
    icon: <ContactsOutlined />,
  },
  {
    label: "Hợp đồng",
    key: "NVHDLD",
    icon: <ContactsOutlined />,
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
