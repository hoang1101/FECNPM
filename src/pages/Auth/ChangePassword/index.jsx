import {
  showConfirmError,
  showConfirmSuccess,
} from '@/components/AccountModal/Modal';
import { useAuth } from '@/context/AuthProvider';
import { AuthService } from '@/services';
import { Button, Form, Input } from 'antd';
import routerLinks from '@/utils/router-links';
import { useNavigate } from 'react-router-dom';
const changePassWord = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth);

  const onFinish = async (value) => {
    try {
      const res = await AuthService.changePassword(auth?.user?.manv, value);
      if (res?.success) {
        showConfirmSuccess(navigate(routerLinks('Dashboard')));
      }
    } catch (error) {
      showConfirmError();
    }
  };

  return (
    <>
      <h1 style={{ fontSize: '35px' }}>ĐỔI MẬT KHẨU</h1>
      <Form
        name="basic"
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
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          label="Password old"
          name="passwordOld"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Password new"
          name="passwordNew"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Password confim"
          name="passwordConfirm"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default changePassWord;
