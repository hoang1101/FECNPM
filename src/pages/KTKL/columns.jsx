import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { Divider } from "antd";
import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import moment from "moment";

export const columns = (getColumnSearchProps) => {
  const navigate = useNavigate();
  return [
    {
      title: "Số quyết định",
      key: "1",
      dataIndex: "SoQD",
    },
    {
      title: "Mã nhân viên",
      key: "2",
      dataIndex: "MaNV",
      ...getColumnSearchProps("MaNV"),
    },
    {
      title: "Hình thức",
      key: "3",
      dataIndex: "HinhThuc",
      render: (_, info) => <>{info?.HinhThuc ? "Khen thưởng" : "Kỉ luật"}</>,
      // ...getColumnSearchProps("HinhThuc"),
    },
    {
      title: "Ngày quyết định",
      key: "4",
      dataIndex: "NgayQD",
      render: (_, info) => <>{moment(info?.NgayQD).format("DD-MM-YYYY")}</>,
    },
    {
      title: "Lí do",
      key: "5",
      dataIndex: "LiDo",
    },
    {
      title: "Số tiền",
      key: "6",
      dataIndex: "SoTien",
    },
    {
      title: "",
      key: "7",
      render: (_, info) => (
        <>
          {/* {(x = info?.NgayBatDau)} */}
          {/* {console.log(
            moment(info?.NgayQD).format("MM"),
            "0" + (new Date().getMonth() + 1),
            moment(info?.NgayQD).format("YYYY"),
            new Date().getFullYear() + ""
          )} */}

          {moment(info?.NgayQD).format("MM") ===
            "0" + (new Date().getMonth() + 1) &&
          moment(info?.NgayQD).format("YYYY") ===
            new Date().getFullYear() + "" ? (
            <EditOutlined
              onClick={() => {
                navigate(routerLinks("editKTKL"), { state: { info } });
              }}
            />
          ) : (
            <EditOutlined disabled={true} style={{ color: "#888888" }} />
          )}
        </>
      ),
    },
  ];
};
