import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";

export const columns = (getColumnSearchProps, dataHV, dataCV) => {
  const navigate = useNavigate();
  return [
    {
      title: "MaNV",
      key: "1",
      dataIndex: "MaNV",
      ...getColumnSearchProps("MaNV"),
    },
    {
      title: "Họ tên",
      key: "2",
      dataIndex: "HoTen",
    },
    {
      title: "Chức Vụ",
      key: "3",
      dataIndex: "MaChucVu",
      render: (_, info) => (
        <>
          {dataCV.map((child) => {
            if (child?.MaChucVu === info?.MaChucVu) {
              return <div>{child?.TenChucVu}</div>;
            }
          })}
        </>
      ),
    },
    {
      title: "Ngày Sinh",
      key: "4",
      dataIndex: "NgaySinh",
    },
    {
      title: "Giới Tính",
      key: "5",
      dataIndex: "GioiTinh",
      render: (_, info) => <>{info?.GioiTinh ? "Nam" : "Nữ"}</>,
    },
    {
      title: "CCCD",
      key: "6",
      dataIndex: "CCCD",
    },
    {
      title: "SDT",
      key: "7",
      dataIndex: "SDT",
    },
    {
      title: "Email",
      key: "8",
      dataIndex: "Email",
    },
    {
      title: "Địa chỉ",
      key: "9",
      dataIndex: "DiaChi",
    },
    {
      title: "Quê Quán",
      key: "10",
      dataIndex: "QueQuan",
    },
    {
      title: "Trình độ",
      key: "11",
      dataIndex: "MaHocVan",
      render: (_, info) => (
        <>
          {dataHV.map((child) => {
            if (child?.MaHocVan === info?.MaHocVan) {
              return <div>{child?.TrinhDo}</div>;
            }
          })}
        </>
      ),
    },
    // {
    //   title: "",
    //   key: "11",
    //   render: (_, info) => (
    //     <>
    //       <EditOutlined
    //         onClick={() => {
    //           navigate(routerLinks("editProfile"), { state: { info } });
    //         }}
    //       />
    //     </>
    //   ),
    // },
  ];
};
