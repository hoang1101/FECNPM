import { useLocation, useNavigate } from "react-router-dom";
import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import routerLinks from "@/utils/router-links";
import {
  informError,
  informSucess,
  showDeleteUserModal,
} from "@/components/AccountModal/Modal";
import { AdminService, ManagerAdmin } from "@/services";
import { useState } from "react";
import { useEffect } from "react";
const Edit = () => {
  const navigate = useNavigate();
  const data = useLocation();
  const [dataHV, setDataHV] = useState([]);
  const [dataCV, setDataCV] = useState([]);
  const [dataIF, setDataIF] = useState([]);

  const DSHV = async () => {
    try {
      const response = await ManagerAdmin.DSHV();
      setDataHV(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };
  const DSNIF = async () => {
    try {
      const response = await ManagerAdmin.NVNIF();
      setDataIF(response);
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

  const onFinish = async (values) => {
    if (!values) return;
    try {
      const res = await ManagerAdmin.createNV(values);
      if (res?.success) {
        const data = {
          MaNV: res?.data?.MaNV,
          HoTen: res?.data?.HoTen,
          MaChucVu: res?.data?.MaChucVu,
          NgaySinh: res?.data?.NgaySinh,
          GioiTinh: res?.data?.GioiTinh ? "1" : "0",
          CCCD: res?.data?.CCCD,
          SDT: res?.data?.SDT,
          Email: res?.data?.Email,
          DiaChi: res?.data?.DiaChi,
          QueQuan: res?.data?.QueQuan,
          MaHocVan: res?.data?.MaHocVan,
        };
        navigate(routerLinks("DSNV"), { replace: true });
      }
      informSucess();
    } catch (error) {
      showDeleteUserModal();
    }
  };
  useEffect(() => {
    DSHV();
    DSCV();
    DSNIF();
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
        label="Mã nhân viên :"
        name="MaNV"
        rules={[
          {
            required: true,
            message: "Không thể bỏ trống mã nhân viên!",
          },
        ]}
      >
        <Select>
          {dataIF.map((child) => {
            return (
              <Select.Option key={child?.MaNV} value={child?.MaNV}>
                {child?.MaNV} - {child?.HoTen}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
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
        <DatePicker />
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
