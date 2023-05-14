import React from "react";
import {
  AppHeaderWrapper,
  HeaderActionsContainer,
  TransparentButton,
} from "./AppHeader.styled";
import { Avatar, Input } from "antd";
import {
  BellOutlined,
  MailOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const AppHeader: React.FC = () => {
  return (
    <AppHeaderWrapper>
      <Input
        size="large"
        style={{ width: 420 }}
        placeholder="Type here to search..."
        prefix={<SearchOutlined />}
      />
      <HeaderActionsContainer>
        <TransparentButton icon={<PlusOutlined />}>Add</TransparentButton>
        <BellOutlined style={{ fontSize: 24 }} />
        <MailOutlined style={{ fontSize: 24 }} />
        <Avatar
          size={"default"}
          style={{ backgroundColor: "#ccc" }}
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
        />
      </HeaderActionsContainer>
    </AppHeaderWrapper>
  );
};

export default AppHeader;
