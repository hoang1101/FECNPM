import { useAuth } from "@/context/AuthProvider";
import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { ManagerAdmin } from "@/services";
import routerLinks from "@/utils/router-links";
import {
  informError,
  informSucess,
  showDeleteUserModal,
} from "@/components/AccountModal/Modal";
import { useEffect, useState } from "react";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const abc = async () => {
    try {
      const response = await ManagerAdmin.NVHD();
      //   if (response?.success) {

      setData(response);
      //   }
    } catch (error) {
      console.log("Error is:", error);
    }
  };
  const onRegister = async (values) => {
    if (!values) return;
    try {
      const res = await ManagerAdmin.createPL(values);
      if (res?.success) {
        const data = {
          MaNV: res?.data?.MaNV,
          SoNgayCong: res?.data?.SoNgayCong,
          SoNgayNghi: res?.data?.SoNgayNghi,
          TienUng: res?.data?.TienUng,
        };
        navigate(routerLinks("DSPL"), { replace: true });
        informSucess();
      } else {
      }
    } catch (error) {
      informError();
      // showDeleteUserModal();
    }
  };
  useEffect(() => {
    abc();
  }, []);
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
          label="Họ tên nhân viên:"
          name="MaNV"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống tên nhân viên!",
            },
          ]}
        >
          <Select>
            {data.map((child) => {
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
          label="Số ngày nghỉ:"
          name="SoNgayNghi"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống số ngày nghỉ!",
            },
          ]}
        >
          <Input type="number" min={0} max={4} defaultValue={0} />
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 20,
          }}
          label="Tiền ứng:"
          name="TienUng"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống số tiền ứng!",
            },
          ]}
        >
          <Input type="number" max={5000000} min={0} />
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
            navigate(routerLinks("DSPL"));
          }}
        >
          Hủy
        </Button>
      </Form>
    </>
  );
};
export default App;
