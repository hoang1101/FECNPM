import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import routerLinks from "@/utils/router-links";
import { informSucess } from "@/components/AccountModal/Modal";
import { AdminService } from "@/services";
import { useEffect, useState } from "react";
const Edit = () => {
  const navigate = useNavigate();
  const data = useLocation();

  const onFinish = (values) => {
    acountEdit({
      TenTaiKhoan: values.TenTaiKhoan,
      MatKhau: values.MatKhau,
      MaQuyen: values.MaQuyen,
    });
  };
  const [dataQ, setDataQ] = useState([]);
  const quyen = async () => {
    try {
      const response = await AdminService.quyen();
      setDataQ(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };
  useEffect(() => {
    quyen();
  }, []);
  const acountEdit = async (body) => {
    try {
      const req = await AdminService.acountEdit(data?.state?.info?.MaNV, body);
      if (req.success) {
        informSucess(navigate(routerLinks("accountlist")));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Cấp mật khẩu cho nhân viên:</h1>
      <Form
        name="edit"
        initialValues={{
          TenTaiKhoan: data?.state?.info?.TenTaiKhoan,
          // MatKhau: data?.state?.info?.MatKhau,
          MaQuyen: data?.state?.info?.MaQuyen,
        }}
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
        autoComplete="off"
      >
        <Form.Item
          label="Tên Tài Khoản:"
          name="TenTaiKhoan"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống tên tài khoản!",
            },
          ]}
          style={{ display: "none" }}
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
          label="Quyền:"
          name="MaQuyen"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống quyền!",
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

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            style={{ backgroundColor: "#c00", borderColor: "#c00" }}
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
export default Edit;
