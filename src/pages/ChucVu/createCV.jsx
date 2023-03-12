import { useAuth } from "@/context/AuthProvider";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ManagerAdmin } from "@/services";
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
      const res = await ManagerAdmin.createCV(values);
      if (res?.success) {
        const data = {
          TenChucVu: res?.data?.TenChucVu,
          MoTa: res?.data?.MoTa,
        };
        navigate(routerLinks("DSCV"), { replace: true });
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
          label="Tên chức vụ:"
          name="TenChucVu"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống tên chức vụ!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 20,
          }}
          label="Mô tả:"
          name="MoTa"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống mô tả chức vụ!",
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
        <Button
          style={{
            backgroundColor: "#c00",
            borderColor: "#c00",
            marginLeft: "240px",
            marginTop: 20,
          }}
          type="primary"
          htmlType="submit"
          onClick={() => {
            navigate(routerLinks("DSCV"));
          }}
        >
          Hủy
        </Button>
      </Form>
    </>
  );
};
export default App;
