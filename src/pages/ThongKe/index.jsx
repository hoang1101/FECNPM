import { ManagerAdmin } from "@/services";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Pagination, Select, Space, Table } from "antd";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { columns } from "./colums";
const App = ({}) => {
  const [dataHV, setDataHV] = useState([]);
  const [dataCV, setDataCV] = useState([]);
  const [dataTK, setDataTK] = useState([]);
  //   const [data, setData] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    DSHV();
    DSCV();
    // TKNVHV();
  }, []);

  const TKNVHV = async (value) => {
    try {
      const response = await ManagerAdmin.TKNVHV(value?.MaHocVan);
      console.log(response, "dsad");
      setDataTK(response);
    } catch (error) {
      console.log("Error is", error);
    }
  };
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
      <Form onFinish={TKNVHV} autoComplete="off">
        <Form.Item
          label="Tên trình độ:"
          name="MaHocVan"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống tên trình độ!",
            },
          ]}
        >
          <Select>
            {dataHV.map((child) => {
              return (
                <Select.Option key={child?.MaHocVan} value={child?.MaHocVan}>
                  {child?.TrinhDo}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            style={{ backgroundColor: "#c00", borderColor: "#c00" }}
            type="primary"
            htmlType="submit"
            //   setData={false}
            //   onClick={(e) => TKNVHV(e.target.value)}
          >
            Lọc
          </Button>
        </Form.Item>
      </Form>
      <Table
        columns={columns(getColumnSearchProps, dataHV, dataCV)}
        dataSource={dataTK?.data}
        rowKey={(record) => record.MaNV}
        // pagination={length}
      />
      <>Total: {dataTK?.count}</>
    </>
  );
};
export default App;
