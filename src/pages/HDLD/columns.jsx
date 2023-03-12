import { EditOutlined, LockOutlined, UnlockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";

import moment from "moment";
import { showLockUserModal } from "@/components/AccountModal/Modal";
import { unLockHDLD, LockHDLD } from "./lockHDLD";

export const columns = (getColumnSearchProps, listHDLD) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã HDLD",
      key: "1",
      dataIndex: "MaHDLD",
    },
    {
      title: "MaNV",
      key: "2",
      dataIndex: "MaNV",
      ...getColumnSearchProps("MaNV"),
    },
    {
      title: "Ngày bắt đầu",
      key: "3",
      dataIndex: "NgayBatDau",
      render: (_, info) => <>{moment(info?.NgayBatDau).format("DD-MM-YYYY")}</>,
    },
    {
      title: "Ngày kết thúc",
      key: "4",
      dataIndex: "NgayKetThuc",
      render: (_, info) => (
        <>{moment(info?.NgayKetThuc).format("DD-MM-YYYY")}</>
      ),
    },
    {
      title: "Ngày ký hợp đồng",
      key: "5",
      dataIndex: "NgayKy",
      render: (_, info) => <>{moment(info?.NgayKy).format("DD-MM-YYYY")}</>,
    },
    {
      title: "Lương cơ bản",
      key: "6",
      dataIndex: "LCB",
    },
    {
      title: "Ngày hủy",
      key: "7",
      dataIndex: "NgayHuy",
      render: (_, info) => (
        <>
          {info?.NgayHuy === null ? (
            <></>
          ) : (
            <>{moment(info?.NgayHuy).format("DD-MM-YYYY")}</>
          )}
        </>
      ),
    },
    {
      title: "Mã bậc lương",
      key: "9",
      dataIndex: "MaBac",
    },
    {
      title: "Trạng thái",
      key: "8",
      dataIndex: "TrangThai",
      render: (_, info) => (
        <>
          {/* {console.log(moment(info?.NgayBatDau) > new Date())} */}
          {info?.TrangThai === false ? (
            <>Hợp đồng đã kết thúc</>
          ) : (
            <>Hợp đồng đang hoạt động</>
          )}
        </>
      ),
    },
    {
      title: "",
      key: "8",
      render: (_, info) => (
        <>
          {/* {console.log(moment(info?.NgayBatDau) > new Date())} */}
          {moment(info?.NgayBatDau) > new Date() ? (
            <EditOutlined
              onClick={() => {
                navigate(routerLinks("editHDLD"), { state: { info } });
              }}
            />
          ) : (
            <EditOutlined disabled={true} style={{ color: "#888888" }} />
          )}
          {info?.TrangThai ? (
            <UnlockOutlined
              onClick={() => {
                showLockUserModal(true, async () => {
                  if (await LockHDLD(info?.MaHDLD)) {
                    listHDLD();
                  }
                });
              }}
            />
          ) : (
            <LockOutlined
              onClick={() => {
                showLockUserModal(false, async () => {
                  if (await unLockHDLD(info?.MaHDLD)) {
                    listHDLD();
                  }
                });
              }}
            />
          )}
        </>
      ),
    },
  ];
};
