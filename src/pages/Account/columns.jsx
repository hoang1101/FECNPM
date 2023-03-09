import {
  CheckCircleOutlined,
  EditOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import Edit from "./edit";
import routerLinks from "@/utils/router-links";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import lock from "./lock";
import unLock from "./unLock";
import { showLockUserModal } from "@/components/AccountModal/Modal";

export const columns = (setSuccess) => {
  const navigate = useNavigate();
  return [
    {
      title: "MaNV",
      key: "1",
      dataIndex: "MaNV",
    },
    {
      title: "Tên tài khoản",
      key: "2",
      dataIndex: "TenTaiKhoan",
    },
    {
      title: "Mật Khẩu",
      key: "3",
      // dataIndex: "MatKhau",
      render: () => <>************</>,
    },
    {
      title: "Quyền",
      key: "4",
      dataIndex: "MaQuyen",
    },

    {
      title: "Hoạt động",
      key: "5",
      render: (_, info) => (
        <>
          <EditOutlined
            onClick={() => {
              navigate(routerLinks("editAcount"), { state: { info } });
            }}
          />
          <Divider type="vertical" />
          {info?.HoatDong ? (
            <UnlockOutlined
              onClick={() => {
                showLockUserModal(true, () => {
                  info?.HoatDong
                    ? lock(info?.MaNV, setSuccess)
                    : unLock(info?.MaNV, setSuccess);
                });
              }}
            />
          ) : (
            <LockOutlined
              onClick={() => {
                showLockUserModal(false, () => {
                  info?.HoatDong
                    ? lock(info?.MaNV, setSuccess)
                    : unLock(info?.MaNV, setSuccess);
                });
              }}
            />
          )}
        </>
      ),
    },
  ];
};
