import { informError, informSucess } from "@/components/AccountModal/Modal";
import { ManagerAdmin } from "@/services";
import { Table } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { columns } from "./columns";

const App = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(true);

  let uniqueId = 1;
  const HVlist = async () => {
    try {
      const response = await ManagerAdmin.DSHV();
      setData(response);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  useEffect(() => {
    HVlist();
    setStatus(false);
  }, []);

  const deleteHV = async (MaHocVan) => {
    try {
      const response = await ManagerAdmin.delHV(MaHocVan);
      if (response?.success) {
        informSucess();
        HVlist();
      } else {
      }
    } catch (error) {
      informError();
      console.log("Error", error);
    }
  };

  return (
    <div>
      <h1>Danh sách học vấn :</h1>
      <Table
        dataSource={data}
        columns={columns(deleteHV)}
        rowKey={(record) => {
          if (!record.__uniqueId) record.__uniqueId = ++uniqueId;
          return record.__uniqueId;
        }}
      />
    </div>
  );
};

export default App;
