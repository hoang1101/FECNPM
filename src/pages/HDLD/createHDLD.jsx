import { useAuth } from "@/context/AuthProvider";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { ManagerAdmin } from "@/services";
import routerLinks from "@/utils/router-links";
import {
  informError,
  informSucess,
  showDeleteUserModal,
} from "@/components/AccountModal/Modal";
import { useEffect, useRef, useState } from "react";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App = () => {
  const navigate = useNavigate();
  const [dataBL, setDataBL] = useState([]);

  const [data, setData] = useState([]);
  useEffect(() => {
    ccc();
    BLlist();
  }, []);
  const ccc = async () => {
    try {
      const response1 = await ManagerAdmin.KT();
      const response2 = await ManagerAdmin.NVCHD();
      //   if (response?.success) {
      setData([...response1, ...response2]);
      //   }
    } catch (error) {
      console.log("Error is:", error);
    }
  };
  const BLlist = async () => {
    try {
      const response = await ManagerAdmin.DSBL();
      setDataBL(response);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  console.log(data, "gfgfc");
  const onRegister = async (values) => {
    if (!values) return;
    try {
      const res = await ManagerAdmin.createHDLD(values);
      if (res?.success) {
        const data = {
          MaNV: res?.data?.MaNV,
          NgayBatDau: res?.data?.NgayBatDau,
          NgayKetThuc: res?.data?.NgayKetThuc,
          MaBac: res?.data?.MaBac,
        };
        navigate(routerLinks("DSHDLD"), { replace: true });
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
          label="Ngày bắt đầu:"
          name="NgayBatDau"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống ngày bắt đầu!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 20,
          }}
          label="Ngày kết thúc:"
          name="NgayKetThuc"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống ngày kết thúc!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 20,
          }}
          label="Mã Bậc:"
          name="MaBac"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống mã bậc!",
            },
          ]}
        >
          <Select>
            {dataBL.map((child) => {
              return (
                <Select.Option key={child?.MaBac} value={child?.MaBac}>
                  {child?.MaBac} - {child?.HeSo}
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
            navigate(routerLinks("DSHDLD"));
          }}
        >
          Hủy
        </Button>
      </Form>
    </>
  );
};
export default App;
