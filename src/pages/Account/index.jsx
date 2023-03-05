import { useAuth } from "@/context/AuthProvider";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { AdminService } from "@/services";
import routerLinks from "@/utils/router-links";
import {
  informSucess,
  showDeleteUserModal,
} from "@/components/AccountModal/Modal";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const onRegister = async (values) => {
    if (!values) return;
    try {
      const res = await AdminService.register(values);
      if (res?.success) {
        const data = {
          password: res?.data?.MatKhau,
          user: res?.data?.TenTaiKhoan,
          role: res?.data?.MaQuyen,
        };
        navigate(routerLinks("Dashboard"), { replace: true });
      }
      informSucess();
    } catch (error) {
      showDeleteUserModal();
    }
  };
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
        onFinish={onRegister}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
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
            <Input />
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
        </Form.Item>
      </Form>
    </>
  );
};
export default App;
