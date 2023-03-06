import { ManagerAdmin } from "@/services";
import { Radio, Tabs } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import NVHD from "./DanhSach";
const App = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const abc = async () => {
    try {
      const response = await ManagerAdmin.NVHD();
      //   if (response?.success) {

      setData1(response);
      //   }
    } catch (error) {
      console.log("Error is:", error);
    }
  };
  const ccc = async () => {
    try {
      const response = await ManagerAdmin.NVKHD();
      //   if (response?.success) {
      setData2(response);
      //   }
    } catch (error) {
      console.log("Error is:", error);
    }
  };
  useEffect(() => {
    abc();
    ccc();
  }, []);
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Danh sách nhân viên đã ký hợp đồng" key="1">
          <NVHD data={data1} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Danh sách nhân viên hết hợp đồng" key="2">
          <NVHD data={data2} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Danh sách nhân viên chưa ký đồng" key="3">
          {/* <NVHD data={1} /> */}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default App;
