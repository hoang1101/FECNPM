import { ManagerAdmin } from "@/services";
import { Radio, Tabs } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import NVHD from "./index";
import NVCV from "./chucvu";

const App = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Trình độ" key="1">
          <NVHD />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Chức vụ" key="2">
          <NVCV />
        </Tabs.TabPane>
        {/* <Tabs.TabPane tab="KTKL" key="3">
          <NVHD data={data3} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Phiếu lương" key="4">
          <NVHD data={data4?.data} />
        </Tabs.TabPane> */}
      </Tabs>
    </div>
  );
};
export default App;
