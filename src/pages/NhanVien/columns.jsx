import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";

export const columns = (getColumnSearchProps, dataHV, dataCV, data1) => {
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
    {
      title: "Trạng thái",
      key: "11",
      render: (_, info) => {
        const check = () => {
          for (const i of data1) {
            if (i.MaNV === info.MaNV) {
              return true;
            }
          }
          return false;
        };
        return (
          <>
            {!check() ? (
              <>
                <EditOutlined
                  onClick={() => {
                    navigate(routerLinks("editProfile"), { state: { info } });
                  }}
                />
              </>
            ) : (
              <EditOutlined disabled={true} style={{ color: "#888888" }} />
            )}
            {/* {data1.map((child) => {
            if (child?.MaNV !== info?.MaNV) {
              return (
                <>
                  
                  <EditOutlined
                    onClick={() => {
                      navigate(routerLinks("editPL"), { state: { info } });
                    }}
                  />
                </>
              );
            } else {
              return (
                <EditOutlined disabled={true} style={{ color: "#888888" }} />
              );
            }
          })} */}
          </>
        );
      },

      /* <>
            <EditOutlined
              onClick={() => {
                navigate(routerLinks("editProfile"), { state: { info } });
              }}
            />
          </> */
    },
  ];
};
