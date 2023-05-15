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
import { userPics } from "../../helpers/util-methods";
import { UserDetailsContext } from "../../contexts/UserDetailsContext";

const AppHeader: React.FC = () => {
  const { user } = React.useContext(UserDetailsContext);
  const userPic = userPics(user?.id ?? 1);
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
          src={userPic}
        />
      </HeaderActionsContainer>
    </AppHeaderWrapper>
  );
};

export default AppHeader;
