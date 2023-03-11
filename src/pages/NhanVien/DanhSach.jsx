import { ManagerAdmin } from "@/services";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Pagination, Space, Table } from "antd";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { columns } from "./columns";
const App = ({ data }) => {
  const [dataHV, setDataHV] = useState([]);
  const [dataCV, setDataCV] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [data1, setData1] = useState([]);
  const abc = async () => {
    try {
      const response1 = await ManagerAdmin.NVHD();
      const response2 = await ManagerAdmin.NVKHD();

      //   if (response?.success) {

      setData1([...response1, ...response2]);
      //   }
    } catch (error) {
      console.log("Error is:", error);
    }
  };
  useEffect(() => {
    DSHV();
    DSCV();
    abc();
  }, []);

  const DSHV = async () => {
    try {
      const response = await ManagerAdmin.DSHV();
      setDataHV(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };
  const DSCV = async () => {
    try {
      const response = await ManagerAdmin.DSCV();
      setDataCV(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  return (
    <>
      <Table
        columns={columns(getColumnSearchProps, dataHV, dataCV, data1)}
        dataSource={data}
        rowKey={"MaNV"}
        pagination={false}
      />
      <Pagination
        total={data.length}
        showTotal={(total, range) => {
          // console.log(range);
          return `Total: ${total} items`;
        }}
        defaultPageSize={20}
        defaultCurrent={1}
      />
    </>
  );
};
export default App;
