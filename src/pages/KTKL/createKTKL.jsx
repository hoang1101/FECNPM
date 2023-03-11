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
    console.log(values);
    if (!values) return;
    try {
      const res = await ManagerAdmin.createKTKL(values);
      if (res?.success) {
        const data = {
          MaNV: res?.data?.MaNV,
          HinhThuc: res?.data?.HinhThuc,
          LiDo: res?.data?.LiDo,
          SoTien: res?.data?.SoTien,
        };

        informSucess(navigate(routerLinks("DSKTKL")));
      }
    } catch (error) {
      informError();
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
          label="Mã nhân viên:"
          name="MaNV"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống tên tài khoản!",
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
          label="Hình thức:"
          name="HinhThuc"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống tên tài khoản!",
            },
          ]}
        >
          <Select>
            (<Select.Option value={"1"}>Khen thưởng</Select.Option>
            <Select.Option value={"0"}>Kỷ luật</Select.Option>
            );
          </Select>
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 20,
          }}
          label="Lí do:"
          name="LiDo"
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
          style={{
            marginBottom: 20,
          }}
          label="Số tiền:"
          name="SoTien"
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
            navigate(routerLinks("DSKTKL"));
          }}
        >
          Hủy
        </Button>
      </Form>
    </>
  );
};
export default App;
