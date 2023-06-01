import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { Divider } from "antd";
import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import moment from "moment";

export const columns = () => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã nhân viên",
      key: "1",
      dataIndex: "MaNV",
      //   ...getColumnSearchProps("MaNV"),
    },
    {
      title: "Tháng",
      key: "2",
      dataIndex: "ThangTL",
      //   ...getColumnSearchProps("ThangTL"),
    },
    {
      title: "Năm",
      key: "3",
      dataIndex: "NamTL",
      //   ...getColumnSearchProps("NamTL"),
    },
    {
      title: "Ngày lập",
      key: "4",
      dataIndex: "NgayLap",
      render: (_, info) => <>{moment(info?.NgayLap).format("DD-MM-YYYY")}</>,
    },
    {
      title: "Lương cơ bản",
      key: "5",
      //   dataIndex: "LCB",
      render: () => <>1800000</>,
    },
    {
      title: "Số ngày nghỉ",
      key: "7",
      dataIndex: "SoNgayNghi",
    },
    {
      title: "Tiền KTKL",
      key: "8",
      dataIndex: "TienKTKL",
    },
    {
      title: "Tiền ứng",
      key: "9",
      dataIndex: "TienUng",
    },
    {
      title: "Số tiền lĩnh",
      key: "10",
      dataIndex: "SoTienLinh",
    },
  ];
};
