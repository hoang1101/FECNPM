import { ManagerAdmin } from "@/services";
import { Radio, Tabs } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import HDLD from "./index";
import HDLDHH from "./hdldhh";
const App = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Hợp đồng đang làm" key="1">
          <HDLD />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Hợp đồng hết hạn và bị hủy" key="2">
          <HDLDHH />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default App;
