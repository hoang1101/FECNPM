import { Button, Form, Input, Popconfirm, Table } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./accountList.less";
import routerLinks from "@/utils/router-links";
import { columns } from "./columns";
import { AdminService } from "@/services";
const App = () => {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);

  let uniqueId = 1;
  const accountList = async () => {
    try {
      const response = await AdminService.acountList();
      if (response?.success) {
        setData(response.acount);
      }
    } catch (error) {
      console.log("Error is:", error);
    }
  };
  useEffect(() => {
    accountList();
  }, []);
  useEffect(() => {
    if (success) {
      accountList();
      setSuccess(false);
    }
  }, [success]);
  return (
    <div>
      <Table
        dataSource={data}
        columns={columns(setSuccess)}
        rowKey={(record) => {
          if (!record.__uniqueId) record.__uniqueId = ++uniqueId;
          return record.__uniqueId;
        }}
      />
    </div>
  );
};
export default App;
