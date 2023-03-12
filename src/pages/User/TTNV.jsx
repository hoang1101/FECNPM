import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input, Radio, Select } from "antd";
import routerLinks from "@/utils/router-links";
import { informError, informSucess } from "@/components/AccountModal/Modal";
import { AdminService, ManagerAdmin, UserAdmin } from "@/services";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthProvider";
const Edit = () => {
  const navigate = useNavigate();
  const data = useLocation();
  const auth = useAuth();
  const [dataHV, setDataHV] = useState([]);
  const [dataCV, setDataCV] = useState([]);
  const [dataNV, setDataNV] = useState([]);
  const [openDis, setOpenDis] = useState(true);
  const DSHV = async () => {
    try {
      const response = await ManagerAdmin.DSHV();
      setDataHV(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };

  const DSCV = async () => {
    try {
      const response = await ManagerAdmin.DSCV();
      setDataCV(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };
  const INFO = async () => {
    try {
      const response = await UserAdmin.INFO(auth.user.manv);
      setDataNV(response);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  const editIF = async (body) => {
    try {
      const req = await UserAdmin.editIF(auth.user.manv, body);
      if (req.success) {
        informSucess();
        setOpenDis(true);
      } else {
        informError();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onFinish = (values) => {
    editIF({
      HoTen: values.HoTen,
      MaChucVu: values.MaChucVu,
      NgaySinh: values.NgaySinh,
      GioiTinh: values.GioiTinh ? "1" : "0",
      CCCD: values.CCCD,
      SDT: values.SDT,
      Email: values.Email,
      DiaChi: values.DiaChi,
      QueQuan: values.QueQuan,
      MaHocVan: values.MaHocVan,
    });
  };
  useEffect(() => {
    DSHV();
    DSCV();
    INFO();
  }, []);
  const editProfile = async (body) => {
    try {
      const req = await ManagerAdmin.editProfile(data?.state?.info?.MaNV, body);
      if (req.success) {
        informSucess(navigate(routerLinks("DSNV")));
      } else {
        informError();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {dataNV.length !== 0 ? (
        <>
          <Form
            name="edit"
            initialValues={{
              HoTen: dataNV?.HoTen,
              NgaySinh: dataNV?.NgaySinh,
              GioiTinh: dataNV?.GioiTinh,
              CCCD: dataNV?.CCCD,
              SDT: dataNV?.SDT,
              Email: dataNV?.Email,
              DiaChi: dataNV?.DiaChi,
              QueQuan: dataNV?.QueQuan,
              MaHocVan: dataNV?.MaHocVan,
              MaChucVu: dataNV?.MaChucVu,
            }}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
            autoComplete="off"
            disabled={openDis}
          >
            <Form.Item
              label="Họ tên :"
              name="HoTen"
              rules={[
                {
                  required: true,
                  message: "Không thể bỏ trống họ tên!",
                },
              ]}
            >
              <Input disabled={true} />
            </Form.Item>
            <Form.Item
              label="Ngày Sinh:"
              name="NgaySinh"
              rules={[
                {
                  required: true,
                  message: "Không thể bỏ trống ngày sinh!",
                },
              ]}
            >
              <Input disabled={true} />
            </Form.Item>
            <Form.Item
              label="Giới tính:"
              name="GioiTinh"
              rules={[
                {
                  required: true,
                  message: "Không thể bỏ trống giới tính!",
                },
              ]}
            >
              <Select disabled={true}>
                <Select.Option value={true}>Nam</Select.Option>
                <Select.Option value={false}>Nữ</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="CCCD:"
              name="CCCD"
              rules={[
                {
                  required: true,
                  message: "Không thể bỏ trống CCCD!",
                },
              ]}
            >
              <Input disabled={true} />
            </Form.Item>
            <Form.Item
              label="Số điện thoại:"
              name="SDT"
              rules={[
                {
                  required: true,
                  message: "Không thể bỏ trống số điện thoại!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Email:"
              name="Email"
              rules={[
                {
                  required: true,
                  message: "Không thể bỏ trống email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Địa chỉ:"
              name="DiaChi"
              rules={[
                {
                  required: true,
                  message: "Không thể bỏ trống địa chỉ!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Quê Quán:"
              name="QueQuan"
              rules={[
                {
                  required: true,
                  message: "Không thể bỏ trống quê quán!",
                },
              ]}
            >
              <Input disabled={true} />
            </Form.Item>
            <Form.Item
              label="Chức vụ:"
              name="MaChucVu"
              rules={[
                {
                  required: true,
                  message: "Không thể bỏ trống chức vụ!",
                },
              ]}
            >
              <Select disabled={true}>
                {dataCV.map((child) => {
                  return (
                    <Select.Option
                      key={child?.MaChucVu}
                      value={child?.MaChucVu}
                    >
                      {child?.TenChucVu}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="Học vấn:"
              name="MaHocVan"
              rules={[
                {
                  required: true,
                  message: "Không thể bỏ trống trình độ!",
                },
              ]}
            >
              <Select disabled={true}>
                {dataHV.map((child) => {
                  return (
                    <Select.Option
                      key={child?.MaHocVan}
                      value={child?.MaHocVan}
                    >
                      {child?.TrinhDo}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
              style={{ display: openDis ? "none" : "" }}
            >
              <Button
                style={{ backgroundColor: "#c00", borderColor: "#c00" }}
                type="primary"
                htmlType="submit"
              >
                Lưu
              </Button>
              <Button
                style={{ backgroundColor: "#c00", borderColor: "#c00" }}
                type="primary"
                htmlType="submit"
                onClick={() => {
                  setOpenDis(true);
                }}
              >
                Hủy
              </Button>
            </Form.Item>
          </Form>

          <Button
            style={{
              backgroundColor: "#c00",
              borderColor: "#c00",
              display: !openDis ? "none" : "",
            }}
            type="primary"
            htmlType="submit"
            onClick={() => setOpenDis(false)}
          >
            Chỉnh sửa
          </Button>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Edit;
