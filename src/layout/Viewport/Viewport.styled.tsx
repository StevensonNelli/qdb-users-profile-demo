import { MenuOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { styled } from "styled-components";

const { Content, Sider } = Layout;

export const SideNav = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed !important;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background-color: #fff !important;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05) !important;
`;

export const ContentLayout = styled(Layout)`
  margin-left: 250px;
  overflow: hidden;
  height: 100vh;
`;

export const CenterCard = styled(Content)`
  padding: 24px;
  background-color: #eff4f8;
  overflow-y: scroll;
  height: calc(100% - 64px);
`;

export const PlaceholderDiv = styled.div`
  padding: 24px;
  text-align: center;
  background: rgb(204, 204, 204);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #397bf6;
  color: #fff;
  width: 250px;
  height: 64px;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 100px;
  height: 50px;
  background-size: 100%;
`;
export const MenuIcon = styled(MenuOutlined)`
  font-size: 24px;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;
