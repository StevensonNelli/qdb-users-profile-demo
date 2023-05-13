import { Layout } from "antd";
import { styled } from "styled-components";

const { Header, Content, Sider } = Layout;

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

export const AppHeader = styled(Header)`
  padding: 0px;
  background-color: #f6fbff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 999;
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
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  background: #397bf6;
  color: #fff;
`;
export const LogoContainer = styled.div`
  font-size: 34px;
  letter-spacing: 9px;
`;
export const LogoDescription = styled.div`
  font-size: 8px;
`;
