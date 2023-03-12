import { useLocation, useNavigate } from "react-router-dom";
import { Button, DatePicker, Form, Input, Select } from "antd";
import routerLinks from "@/utils/router-links";
import { informError, informSucess } from "@/components/AccountModal/Modal";
import { ManagerAdmin } from "@/services";
import moment from "moment";
import { useEffect, useState } from "react";
const Edit = () => {
  const navigate = useNavigate();
  const data = useLocation();

  const [data1, setData1] = useState([]);
  const [dataBL, setDataBL] = useState([]);
  useEffect(() => {
    ccc();
    BLlist();
  }, []);
  const BLlist = async () => {
    try {
      const response = await ManagerAdmin.DSBL();
      setDataBL(response);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  const ccc = async () => {
    try {
      const response1 = await ManagerAdmin.KT();
      const response2 = await ManagerAdmin.NVCHD();
      //   if (response?.success) {
      setData1([...response1, ...response2]);
      //   }
      console.log(response1, response2);
    } catch (error) {
      console.log("Error is:", error);
    }
  };
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
      }
    } catch (error) {
      informError();
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
        label="Mã nhân viên:"
        name="MaNV"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống mã nhân viên!",
          },
        ]}
      >
        <Select>
          {data1.map((child) => {
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
        label="Ngày ký hợp đồng:"
        name="NgayKy"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống ngày ký!",
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
            message: "Không thể bỏ trống mã bậc lương!",
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
