import { useAuth } from "@/context/AuthProvider";
import { Button, Form, Input, Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { AdminService, ManagerAdmin } from "@/services";
import routerLinks from "@/utils/router-links";
import {
  informSucess,
  showDeleteUserModal,
} from "@/components/AccountModal/Modal";
import { useEffect, useState } from "react";

const App = () => {
  const navigate = useNavigate();
  // const data = useLocation();
  const [dataIF, setDataIF] = useState([]);
  const [dataQ, setDataQ] = useState([]);
  const onFinish = (values) => {
    acountEdit({
      TenTaiKhoan: values.TenTaiKhoan,
      MatKhau: values.MatKhau,
      MaQuyen: values.MaQuyen,
    });
  };
  const DSNIF = async () => {
    try {
      const response = await ManagerAdmin.NVNIF();
      setDataIF(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };
  const quyen = async () => {
    try {
      const response = await AdminService.quyen();
      setDataQ(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };
  useEffect(() => {
    DSNIF();
    quyen();
  }, []);
  console.log(dataIF);
  const acountEdit = async (body) => {
    try {
      const req = await AdminService.acountEdit(dataIF?.MaNV, body);
      if (req.success) {
        informSucess(navigate(routerLinks("accountlist")));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const auth = useAuth();
  // const navigate = useNavigate();

  // const onRegister = async (values) => {
  //   if (!values) return;
  //   try {
  //     const res = await AdminService.register(values);
  //     if (res?.success) {
  //       const data = {
  //         password: res?.data?.MatKhau,
  //         user: res?.data?.TenTaiKhoan,
  //         role: res?.data?.MaQuyen,
  //       };
  //       navigate(routerLinks("Dashboard"), { replace: true });
  //     }
  //     informSucess();
  //   } catch (error) {
  //     showDeleteUserModal();
  //   }
  // };
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 12,
        }}
        style={{
          maxWidth: 800,
          marginTop: 60,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Mã nhân viên :"
          name="MaNV"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống mã nhân viên!",
            },
          ]}
        >
          <Select>
            {dataIF.map((child) => {
              return (
                <Select.Option key={child?.MaNV} value={child?.MaNV}>
                  {child?.MaNV} - {child?.HoTen}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 20,
          }}
          label="Tên Tài Khoản:"
          name="TenTaiKhoan"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống tên tài khoản!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật Khẩu"
          name="MatKhau"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống mật khẩu!",
            },
            { max: 8, message: "Không thể quá 8 ký tự khẩu!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 20,
          }}
          label="Ma Quyen:"
          name="MaQuyen"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống tên tài khoản!",
            },
          ]}
        >
          <Select>
            {dataQ.map((child) => {
              return (
                <Select.Option key={child?.MaQuyen} value={child?.MaQuyen}>
                  {child?.MaQuyen} - {child?.TenQuyen}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Button
          style={{
            backgroundColor: "#c00",
            borderColor: "#c00",
            marginLeft: "240px",
            marginTop: 20,
          }}
          type="primary"
          htmlType="submit"
        >
          Lưu
        </Button>
      </Form>
    </>
  );
};
export default App;
