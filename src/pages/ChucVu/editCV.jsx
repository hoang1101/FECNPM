import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import routerLinks from "@/utils/router-links";
import { informSucess } from "@/components/AccountModal/Modal";
import { ManagerAdmin } from "@/services";
const Edit = () => {
  const navigate = useNavigate();
  const data = useLocation();

  const onFinish = (values) => {
    editCV({
      TenChucVu: values.TenChucVu,
      MoTa: values.MoTa,
    });
  };
  const editCV = async (body) => {
    try {
      const req = await ManagerAdmin.editCV(data?.state?.info?.MaChucVu, body);
      if (req.success) {
        informSucess(navigate(routerLinks("DSCV")));
      }
    } catch (error) {
      informError();
      console.log(error);
    }
  };
  return (
    <Form
      name="edit"
      initialValues={{
        TenChucVu: data?.state?.info?.TenChucVu,
        MoTa: data?.state?.info?.MoTa,
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
        label="Tên Chức Vụ:"
        name="TenChucVu"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống tên chức vụ!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mô tả:"
        name="MoTa"
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
