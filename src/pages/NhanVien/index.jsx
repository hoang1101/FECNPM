import { ManagerAdmin } from "@/services";
import { Radio, Tabs } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import NVHD from "./DanhSach";
const App = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

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
      const response = await ManagerAdmin.KT();
      //   if (response?.success) {
      setData2(response);
      //   }
    } catch (error) {
      console.log("Error is:", error);
    }
  };
  const aaa = async () => {
    try {
      const response = await ManagerAdmin.NVCHD();
      //   if (response?.success) {
      setData3(response);
      //   }
    } catch (error) {
      console.log("Error is:", error);
    }
  };
  const ddd = async () => {
    try {
      const response = await ManagerAdmin.TKNVSHH();
      //   if (response?.success) {
      setData4(response);
      //   }
    } catch (error) {
      console.log("Error is:", error);
    }
  };
  useEffect(() => {
    abc();
    ccc();
    aaa();
    ddd();
  }, []);
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Danh sách nhân viên đã ký hợp đồng" key="1">
          <NVHD data={data1} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Danh sách nhân viên hết HDHD hoặc bị hủy" key="2">
          <NVHD data={data2} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Danh sách nhân viên chưa ký đồng" key="3">
          <NVHD data={data3} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Danh sách nhân viên sắp hết hợp đồng (<1T)" key="4">
          <NVHD data={data4?.data} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default App;
