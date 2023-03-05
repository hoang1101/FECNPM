import Vite from "@/assets/logohonda.png";
import { useAuth } from "@/context/AuthProvider";
import { AuthService } from "@/services";
import { Button, Form, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./index.less";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const onFinished = async (values) => {
    if (!values) return;
    try {
      const res = await AuthService.login(values);
      if (res?.success) {
        const data = {
          token: res?.response?.token,
          role: res?.data?.MaQuyen,
          user: res?.data?.TenTaiKhoan,
        };
        auth.login(data);
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflowY: "hidden",
          backgroundColor: "#f8f8f8",
        }}
      >
        <div className="form-Login">
          <div className="logo">
            <img alt="logo" src={Vite} />
            <span>HEAD HONDA MAN THIỆN</span>
          </div>
          <Form onFinish={onFinished}>
            <FormItem
              name="TenTaiKhoan"
              rules={[{ required: true }]}
              hasFeedback
            >
              <Input placeholder={`TenTaiKhoan`} />
            </FormItem>

            <FormItem name="MatKhau" rules={[{ required: true }]} hasFeedback>
              <Input placeholder="MatKhau" type="password" required />
            </FormItem>
            <Row>
              <Button type="primary" htmlType="submit">
                Sign in
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
