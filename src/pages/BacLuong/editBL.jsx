import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import routerLinks from "@/utils/router-links";
import { informError, informSucess } from "@/components/AccountModal/Modal";
import { ManagerAdmin } from "@/services";
const Edit = () => {
  const navigate = useNavigate();
  const data = useLocation();

  const onFinish = (values) => {
    editBL({
      HeSo: values.HeSo,
    });
  };
  const editBL = async (body) => {
    try {
      const req = await ManagerAdmin.editBL(data?.state?.info?.MaBac, body);
      if (req?.success) {
        informSucess(navigate(routerLinks("DSBL")));
      } else {
        informError(navigate(routerLinks("DSBL")));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      name="edit"
      initialValues={{
        HeSo: data?.state?.info?.HeSo,
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
        label="Hệ số lương:"
        name="HeSo"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống hệ số lương!",
          },
        ]}
      >
        <Input type="number" step="any" id="float-input" name="float-input" />
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
            navigate(routerLinks("DSBL"));
          }}
        >
          Hủy
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Edit;
