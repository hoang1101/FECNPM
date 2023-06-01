import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import routerLinks from "@/utils/router-links";
import { informError, informSucess } from "@/components/AccountModal/Modal";
import { ManagerAdmin } from "@/services";
import { values } from "lodash";
const Edit = () => {
  const navigate = useNavigate();
  const data = useLocation();

  const onFinish = (values) => {
    editHV({
      TrinhDo: values.TrinhDo,
    });
  };
  const editHV = async (body) => {
    try {
      const req = await ManagerAdmin.editHV(data?.state?.info?.MaHocVan, body);
      if (req?.success) {
        informSucess(navigate(routerLinks("DSHV")));
      }
    } catch (error) {
      informError();
      console.log(error);
    }
  };
  // console.log(data.TenHocVan);
  return (
    <>
      <h1>Chỉnh sửa học vấn : </h1>
      <Form
        name="edit"
        initialValues={{
          TrinhDo: data?.state?.info?.TrinhDo,
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
          label="Tên Học Vấn:"
          name="TrinhDo"
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
            onClick={() => {
              navigate(routerLinks("DSHV"));
            }}
          >
            Hủy
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Edit;
