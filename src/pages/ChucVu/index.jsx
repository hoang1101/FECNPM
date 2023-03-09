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
  const CVlist = async () => {
    try {
      const response = await ManagerAdmin.DSCV();
      setData(response);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  useEffect(() => {
    CVlist();
    setStatus(false);
  }, []);

  const deleteCV = async (MaChucVu) => {
    try {
      const response = await ManagerAdmin.delCV(MaChucVu);
      if (response?.success) {
        informSucess();
        CVlist();
      } else {
      }
    } catch (error) {
      informError();
      console.log("Error", error);
    }
  };

  return (
    <div>
      <Table
        dataSource={data}
        columns={columns(deleteCV)}
        rowKey={(record) => {
          if (!record.__uniqueId) record.__uniqueId = ++uniqueId;
          return record.__uniqueId;
        }}
      />
    </div>
  );
};

export default App;
