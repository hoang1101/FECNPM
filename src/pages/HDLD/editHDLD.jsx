import { useLocation, useNavigate } from "react-router-dom";
import { Button, DatePicker, Form, Input } from "antd";
import routerLinks from "@/utils/router-links";
import { informError, informSucess } from "@/components/AccountModal/Modal";
import { ManagerAdmin } from "@/services";
import moment from "moment";
const Edit = () => {
  const navigate = useNavigate();
  const data = useLocation();

  const onFinish = (values) => {
    editHDLD({
      MaNV: values.MaNV,
      NgayBatDau: moment(values.NgayBatDau),
      NgayKetThuc: moment(values.NgayKetThuc),
      MaBac: values.MaBac,
      NgayKy: moment(values.NgayKy),
    });
  };
  const editHDLD = async (body) => {
    try {
      const req = await ManagerAdmin.editHDLD(data?.state?.info?.MaHDLD, body);
      if (req.success) {
        informSucess(navigate(routerLinks("DSHDLD")));
      } else {
        informError();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data?.state);
  return (
    <Form
      name="edit"
      initialValues={{
        MaNV: data?.state?.info?.MaNV,
        NgayBatDau: moment(data?.state?.info?.NgayBatDau),
        NgayKetThuc: moment(data?.state?.info?.NgayKetThuc),
        MaBac: data?.state?.info?.MaBac,
        NgayKy: moment(data?.state?.info?.NgayKy),
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
        style={{
          marginBottom: 20,
        }}
        label="Họ tên nhân viên:"
        name="MaNV"
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
        label="Ngày bắt đầu:"
        name="NgayBatDau"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống tên tài khoản!",
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
            message: "Không thể bỏ trống tên tài khoản!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        style={{
          marginBottom: 20,
        }}
        label="Ngày ký hợp đồng:"
        name="NgayKy"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống tên tài khoản!",
          },
        ]}
      >
        <DatePicker disabled={true} />
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
      </Button>{" "}
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
  );
};
export default Edit;
