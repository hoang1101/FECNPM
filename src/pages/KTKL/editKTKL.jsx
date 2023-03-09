import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import routerLinks from "@/utils/router-links";
import { informSucess } from "@/components/AccountModal/Modal";
import { ManagerAdmin } from "@/services";
import { useEffect } from "react";
import { useState } from "react";
const Edit = () => {
  const navigate = useNavigate();
  const data = useLocation();

  const onFinish = (values) => {
    editKTKL({
      MaNV: values.MaNV,
      HinhThuc: values.HinhThuc,
      LiDo: values.LiDo,
      SoTien: values.SoTien,
    });
  };

  const [dataNV, setDataNV] = useState([]);

  const abc = async () => {
    try {
      const response = await ManagerAdmin.NVHD();
      //   if (response?.success) {

      setDataNV(response);
      //   }
    } catch (error) {
      console.log("Error is:", error);
    }
  };
  useEffect(() => {
    abc();
  }, []);
  const editKTKL = async (body) => {
    try {
      const req = await ManagerAdmin.editKTKL(data?.state?.info?.SoQD, body);
      if (req.success) {
        informSucess(navigate(routerLinks("DSKTKL")));
      } else {
        informError();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      name="edit"
      initialValues={{
        MaNV: data?.state?.info?.MaNV,
        HinhThuc: data?.state?.info?.HinhThuc,
        LiDo: data?.state?.info?.LiDo,
        SoTien: data?.state?.info?.SoTien,
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
        label="Mã nhân viên:"
        name="MaNV"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống tên chức vụ!",
          },
        ]}
      >
        <Select>
          {dataNV.map((child) => {
            return (
              <Select.Option key={child?.MaNV} value={child?.MaNV}>
                {child?.MaNV} - {child?.HoTen}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        label="Hình thức:"
        name="HinhThuc"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống mô tả!",
          },
        ]}
      >
        <Select>
          <Select.Option value={true}>Khen Thưởng</Select.Option>
          <Select.Option value={false}>Kỉ Luật</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Lí do:"
        name="LiDo"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống mô tả!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Số tiền:"
        name="SoTien"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống mô tả!",
          },
        ]}
      >
        <Input />
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
  );
};
export default Edit;
