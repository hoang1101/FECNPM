import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { Divider } from "antd";
import { showDeleteOderModal } from "@/components/AccountModal/Modal";

export const columns = (deleteCV) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã chức vụ",
      key: "1",
      dataIndex: "MaChucVu",
    },
    {
      title: "Tên chức vụ",
      key: "2",
      dataIndex: "TenChucVu",
    },
    {
      title: "Mô tả",
      key: "3",
      dataIndex: "MoTa",
    },
    {
      title: "",
      key: "4",
      render: (_, info) => (
        <>
          <EditOutlined
            onClick={() => {
              navigate(routerLinks("editCV"), { state: { info } });
            }}
          />
          <Divider type="vertical" />
          <DeleteOutlined
            onClick={() => {
              showDeleteOderModal(() => {
                deleteCV(info.MaChucVu);
              });
            }}
          />
        </>
      ),
    },
  ];
};
