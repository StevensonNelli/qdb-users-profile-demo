import { styled } from "styled-components";
import { Button, Layout } from "antd";
const { Header } = Layout;

export const AppHeaderWrapper = styled(Header)`
  padding: 0px 24px;
  background-color: #f6fbff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin-left: 32px;
  }
`;

export const TransparentButton = styled(Button)`
  border: none;
  box-shadow: none;
  background: transparent;
`;
