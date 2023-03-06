import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input, Radio, Select } from "antd";
import routerLinks from "@/utils/router-links";
import { informError, informSucess } from "@/components/AccountModal/Modal";
import { AdminService, ManagerAdmin } from "@/services";
import { useState } from "react";
import { useEffect } from "react";
const Edit = () => {
  const navigate = useNavigate();
  const data = useLocation();
  const [dataHV, setDataHV] = useState([]);
  const [dataCV, setDataCV] = useState([]);

  const DSHV = async () => {
    try {
      const response = await ManagerAdmin.DSHV();
      setDataHV(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };

  const DSCV = async () => {
    try {
      const response = await ManagerAdmin.DSCV();
      setDataCV(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };

  const onFinish = (values) => {
    editProfile({
      HoTen: values.HoTen,
      MaChucVu: values.MaChucVu,
      NgaySinh: values.NgaySinh,
      GioiTinh: values.GioiTinh ? "1" : "0",
      CCCD: values.CCCD,
      SDT: values.SDT,
      Email: values.Email,
      DiaChi: values.DiaChi,
      QueQuan: values.QueQuan,
      MaHocVan: values.MaHocVan,
    });
  };
  useEffect(() => {
    DSHV();
    DSCV();
  }, []);
  const editProfile = async (body) => {
    try {
      const req = await ManagerAdmin.editProfile(data?.state?.info?.MaNV, body);
      if (req.success) {
        informSucess(navigate(routerLinks("DSNV")));
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
        HoTen: data?.state?.info?.HoTen,
        NgaySinh: data?.state?.info?.NgaySinh,
        GioiTinh: data?.state?.info?.GioiTinh,
        CCCD: data?.state?.info?.CCCD,
        SDT: data?.state?.info?.SDT,
        Email: data?.state?.info?.Email,
        DiaChi: data?.state?.info?.DiaChi,
        QueQuan: data?.state?.info?.QueQuan,
        MaHocVan: data?.state?.info?.MaHocVan,
        MaChucVu: data?.state?.info?.MaChucVu,
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
        label="Họ tên :"
        name="HoTen"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống họ tên!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ngày Sinh:"
        name="NgaySinh"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống ngày sinh!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Giới tính:"
        name="GioiTinh"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống giới tính!",
          },
        ]}
      >
        <Select>
          <Select.Option value={true}>Nam</Select.Option>
          <Select.Option value={false}>Nữ</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="CCCD:"
        name="CCCD"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống CCCD!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Số điện thoại:"
        name="SDT"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống số điện thoại!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email:"
        name="Email"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Địa chỉ:"
        name="DiaChi"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống địa chỉ!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Quê Quán:"
        name="QueQuan"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống quê quán!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Chức vụ:"
        name="MaChucVu"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống chức vụ!",
          },
        ]}
      >
        <Select>
          {dataCV.map((child) => {
            return (
              <Select.Option key={child?.MaChucVu} value={child?.MaChucVu}>
                {child?.TenChucVu}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        label="Học vấn:"
        name="MaHocVan"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống trình độ!",
          },
        ]}
      >
        <Select>
          {dataHV.map((child) => {
            return (
              <Select.Option key={child?.MaHocVan} value={child?.MaHocVan}>
                {child?.TrinhDo}
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
        <Button
          style={{ backgroundColor: "#c00", borderColor: "#c00" }}
          type="primary"
          htmlType="submit"
          onClick={() => {
            navigate(routerLinks("DSNV"));
          }}
        >
          Hủy
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Edit;
