import { Radio, Tabs } from "antd";
import { useState } from "react";
import NVHD from "./DanhSach";
const App = () => {
  const [size, setSize] = useState("small");
  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="haha" key="1">
          <NVHD />
        </Tabs.TabPane>
        <Tabs.TabPane tab="hihi" key="2">
          <NVHD />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default App;
