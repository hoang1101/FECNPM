import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { Divider } from "antd";
import { showDeleteOderModal } from "@/components/AccountModal/Modal";

export const columns = (deleteHV) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã học vấn",
      key: "1",
      dataIndex: "MaHocVan",
    },
    {
      title: "Tên học vấn",
      key: "2",
      dataIndex: "TrinhDo",
    },
    {
      title: "",
      key: "3",
      render: (_, info) => (
        <>
          <EditOutlined
            onClick={() => {
              navigate(routerLinks("editHV"), { state: { info } });
            }}
          />
          <Divider type="vertical" />
          <DeleteOutlined
            onClick={() => {
              showDeleteOderModal(() => {
                deleteHV(info.MaHocVan);
              });
            }}
          />
        </>
      ),
    },
  ];
};
