import { informError, informSucess } from "@/components/AccountModal/Modal";
import { useAuth } from "@/context/AuthProvider";
import { ManagerAdmin, UserAdmin } from "@/services";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Highlighter from "react-highlight-words";
import { columns } from "./clHD";

const App = () => {
  const auth = useAuth();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(true);

  let uniqueId = 1;
  //   console.log(auth.user.manv, "bbb");
  const HDLDL = async () => {
    try {
      //   console.log(MaNV, "aaaa");
      //   const MaNV = auth?.user?.manv;
      const response = await UserAdmin.DSHDLD(auth.user.manv);
      setData(response);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  // console.log(data);
  useEffect(() => {
    HDLDL();
    // setStatus(false);
  }, []);
  return (
    <div>
      <Table
        dataSource={data}
        columns={columns()}
        rowKey={(record) => {
          if (!record.__uniqueId) record.__uniqueId = ++uniqueId;
          return record.__uniqueId;
        }}
      />
    </div>
  );
};

export default App;
