import { ManagerAdmin } from "@/services";
import { Button, Form, Input, Row, Select, Table } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { columns } from "./columns";

const TKL = () => {
  const [data, setData] = useState([]);
  const [NV, setDataNV] = useState([]);
  const [search, setSearch] = useState();
  useEffect(() => {
    DSPL();
    DSNV();
  }, [search]);
  console.log(search);
  const DSPL = async () => {
    try {
      const req = await ManagerAdmin.TKL(search?.MaNV, search?.nam);
      if (req.success) setData(req);
    } catch (error) {}
  };
  const DSNV = async () => {
    try {
      const req = await ManagerAdmin.TenNV();
      setDataNV(req);
    } catch (error) {}
  };
  const onSearch = (value) => {
    setSearch(value);
  };
  const DSTenNV = () => {
    let tmp = [];
    for (const i of NV) {
      tmp.push({
        value: i.MaNV,
        label: i.HoTen,
      });
    }
    return tmp;
  };
  const nam = () => {
    let tmp = [];
    for (let i = 2020; i < 2026; i++) {
      tmp.push({
        value: i,
        label: i,
      });
    }
    return tmp;
  };
  return (
    <>
      <Form onFinish={onSearch}>
        <Row>
          <Form.Item name={"MaNV"}>
            <Select
              placeholder="Tên nhân viên"
              options={DSTenNV()}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              optionFilterProp="children"
              showSearch
            />
          </Form.Item>
          <Form.Item name={"nam"}>
            <Select placeholder="Năm" options={nam()} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Search</Button>
          </Form.Item>
        </Row>
      </Form>
      <Table columns={columns()} dataSource={data.data} />
      <div>Tổng lương: {data?.tong ? data?.tong : "0"}</div>
    </>
  );
};

export default TKL;
