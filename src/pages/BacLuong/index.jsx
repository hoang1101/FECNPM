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
  const BLlist = async () => {
    try {
      const response = await ManagerAdmin.DSBL();
      setData(response);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  useEffect(() => {
    BLlist();
    setStatus(false);
  }, []);

  const deleteMB = async (MaBac) => {
    try {
      const response = await ManagerAdmin.delBL(MaBac);
      if (response?.success) {
        informSucess();
        BLlist();
      } else {
        informError();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <Table
        dataSource={data}
        columns={columns(deleteMB)}
        rowKey={(record) => {
          if (!record.__uniqueId) record.__uniqueId = ++uniqueId;
          return record.__uniqueId;
        }}
      />
    </div>
  );
};

export default App;
