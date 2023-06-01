import { useAuth } from "@/context/AuthProvider";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ManagerAdmin } from "@/services";
import routerLinks from "@/utils/router-links";
import {
  informError,
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
      const res = await ManagerAdmin.createHV(values);
      if (res?.success) {
        const data = {
          TrinhDo: res?.data?.TrinhDo,
        };
        navigate(routerLinks("DSHV"), { replace: true });
        informSucess();
      } else {
        informError();
      }
    } catch (error) {
      showDeleteUserModal();
    }
  };
  return (
    <>
      <h1>Tạo học vấn :</h1>
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
          label="Tên Trình Độ:"
          name="TrinhDo"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống tên trình độ!",
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
      </Form>
    </>
  );
};
export default App;
