import { getFirstPathCode } from "@/utils/getFirstPathCode";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Layout, Menu } from "antd";
import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import HeaderComponent from "./Header";
import "./index.less";
import listMenu from "./menus";
import Logo from "@/assets/logohonda.png";
import ReactLogo from "@/assets/react.svg";
import { keyToken } from "@/constant/auth";
import routerLinks from "@/utils/router-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Header, Sider, Content } = Layout;
const LayoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [collapsed, setCollapsed] = useState(false);
  const [openKey, setOpenkey] = useState();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  useEffect(() => {
    const code = getFirstPathCode(location.pathname);

    setOpenkey(code);
  }, [location.pathname]);

  return (
    <Layout className="main-layout-page" hasSider>
      {/* <Sider className="sider" trigger={null} collapsible collapsed={collapsed}> */}
      <Sider className="sider">
        <div className="logo">
          <img style={{}} alt="logo" src={Logo} />
        </div>
        <Menu
          className="menu"
          defaultSelectedKeys={["1"]}
          onClick={(info) => {
            !localStorage.getItem(keyToken)
              ? navigate(routerLinks("Login"), { replace: true })
              : navigate(routerLinks(info.key));
          }}
          theme="#c00"
          mode="inline"
          items={listMenu()}
        />
      </Sider>
      <Layout className="site-layout" width="400px">
        {/* <HeaderComponent collapsed={collapsed} handleCollapsed={setCollapsed} /> */}
        <HeaderComponent />

        <Suspense fallback={<h1>Loading post...</h1>}>
          <Layout
            style={{
              padding: "0 24px 24px",
              backgroundColor: "#F3F4F6",
            }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            {/*  */}
            <Content
              className="hihi main-layout-page-content"
              style={{ overflow: "auto" }}
            >
              <Card>
                <Outlet />
              </Card>
            </Content>
          </Layout>
        </Suspense>
      </Layout>
    </Layout>
  );
};
export default LayoutPage;
