import { informError, informSucess } from "@/components/AccountModal/Modal";
import { ManagerAdmin } from "@/services";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Pagination, Space, Table } from "antd";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Highlighter from "react-highlight-words";
import { Navigate } from "react-router-dom";
import { columns } from "./columns";
import routerLinks from "@/utils/router-links";

const App = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

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

  let uniqueId = 1;
  const KTKLlist = async () => {
    try {
      const response = await ManagerAdmin.DSKTKL();
      setData(response);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  useEffect(() => {
    KTKLlist();
    setStatus(false);
  }, []);

  // const deleteCV = async (MaChucVu) => {
  //   try {
  //     const response = await ManagerAdmin.delCV(MaChucVu);
  //     if (response?.success) {
  //       informSucess();
  //       KTKLlist();
  //     } else {
  //     }
  //   } catch (error) {
  //     informError();
  //     console.log("Error", error);
  //   }
  // };

  return (
    <div>
      <Table
        dataSource={data}
        columns={columns(getColumnSearchProps)}
        rowKey={(record) => {
          if (!record.__uniqueId) record.__uniqueId = ++uniqueId;
          return record.__uniqueId;
        }}
        pagination={
          {
            // pageSize: 10,
            // showTotal,
            // scroll: {
            //   x: 1500,
            //   y: 300,
            // },
          }
        }
      />
      <>Total: {data.length}</>
      {/* <Pagination
        total={data.length}
        showTotal={(total, range) => {
          // console.log(range);
          return `Total: ${total} items`;
        }}
        defaultPageSize={10}
        defaultCurrent={1}
      /> */}
    </div>
  );
};

export default App;
