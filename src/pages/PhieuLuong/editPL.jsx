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
    editPL({
      MaNV: values.MaNV,
      ThangTL: values.ThangTL,
      NamTL: values.NamTL,
      SoNgayCong: values.SoNgayCong,
      SoNgayNghi: values.SoNgayNghi,
      TienUng: values.TienUng,
    });
  };
  const editPL = async (body) => {
    // console.log(body);
    try {
      const req = await ManagerAdmin.editPL(
        data?.state?.info?.MaNV,
        data?.state?.info?.ThangTL,
        data?.state?.info?.NamTL,
        body
      );
      if (req?.success) {
        informSucess(navigate(routerLinks("DSPL")));
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
        ThangTL: data?.state?.info?.ThangTL,
        NamTL: data?.state?.info?.NamTL,
        SoNgayCong: data?.state?.info?.SoNgayCong,
        SoNgayNghi: data?.state?.info?.SoNgayNghi,
        TienUng: data?.state?.info?.TienUng,
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
            message: "Không thể bỏ trống mã nhân viên!",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Tháng:"
        name="ThangTL"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống tháng!",
          },
        ]}
      >
        <Input
          type="number"
          min={new Date().getMonth()}
          max={new Date().getMonth() + 1}
        />
      </Form.Item>
      <Form.Item
        label="Năm:"
        name="NamTL"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống năm!",
          },
        ]}
      >
        <Input
          type="number"
          min={new Date().getFullYear() - 1}
          max={new Date().getFullYear() + 1}
          defaultValue={26}
        />
      </Form.Item>

      <Form.Item
        label="Số ngày nghỉ:"
        name="SoNgayNghi"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống số ngày nghỉ!",
          },
        ]}
      >
        <Input type="number" min={0} max={4} />
      </Form.Item>
      <Form.Item
        label="Tiền ứng:"
        name="TienUng"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống số tiền ứng!",
          },
        ]}
      >
        <Input type="number" min={0} max={5000000} />
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
            navigate(routerLinks("DSPL"));
          }}
        >
          Hủy
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Edit;
