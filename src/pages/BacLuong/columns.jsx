import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";

export const columns = (deleteMB) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã bậc lương",
      key: "1",
      dataIndex: "MaBac",
    },
    {
      title: "Hệ số",
      key: "2",
      dataIndex: "HeSo",
    },

    {
      title: "",
      key: "3",
      render: (_, info) => (
        <>
          <EditOutlined
            onClick={() => {
              navigate(routerLinks("editBL"), { state: { info } });
            }}
          />
          <Divider type="vertical" />
          <DeleteOutlined
            onClick={() => {
              showDeleteOderModal(() => {
                deleteMB(info.MaBac);
              });
            }}
          />
        </>
      ),
    },
  ];
};
