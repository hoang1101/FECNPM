import { ManagerAdmin } from "@/services";
import { Radio, Tabs } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import HDLD from "./index";
import HDLDHH from "./hdldhh";
const App = () => {
  const [data, setData] = useState();
  const abc = (value) => {
    setData(value);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={abc}>
        <Tabs.TabPane tab="Hợp đồng đang làm" key="1">
          <HDLD loadData={data} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Hợp đồng hết hạn và bị hủy" key="2">
          <HDLDHH loadData={data} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default App;
