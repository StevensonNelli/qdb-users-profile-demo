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
`;

export const ContentLayout = styled(Layout)`
  margin-left: 200px;
  overflow: hidden;
  height: 100vh;
`;

export const AppHeader = styled(Header)`
  padding: 0px;
  background: rgb(204, 204, 204);
`;
export const CenterCard = styled(Content)`
  margin: 24px;
  overflow-y: scroll;
  height: calc(100% - 64px);
`;

export const PlaceholderDiv = styled.div`
  padding: 24px;
  text-align: center;
  background: rgb(204, 204, 204);
`;
