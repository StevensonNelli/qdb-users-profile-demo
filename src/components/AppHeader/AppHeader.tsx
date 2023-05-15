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
import { User } from "../../types/User";
import { userPics } from "../../helpers/util-methods";

interface UserMenuProps {
  userDetails: User | null;
}

const AppHeader: React.FC<UserMenuProps> = ({ userDetails }) => {
  const userPic = userPics(userDetails?.id ?? 1);
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
