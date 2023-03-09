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
  const navigate = useNavigate();

  const onRegister = async (values) => {
    if (!values) return;
    try {
      const res = await ManagerAdmin.createBL(values);
      if (res?.success) {
        const data = {
          HeSo: res?.data?.HeSo,
        };
        navigate(routerLinks("DSBL"), { replace: true });
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
          label="Hệ số lương:"
          name="HeSo"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống hệ số lương!",
            },
          ]}
        >
          <Input type="number" step="any" id="float-input" name="float-input" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
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
              navigate(routerLinks("DSBL"));
            }}
          >
            Hủy
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default App;
