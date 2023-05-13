import { ContainerOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import {
  HelloText,
  LiveMetricsButton,
  SwitchUserField,
  UserMenuWrapper,
} from "./UserMenu.styled";

const UserMenu: React.FC = () => {
  return (
    <UserMenuWrapper>
      <Avatar
        size={64}
        style={{ backgroundColor: "#ccc" }}
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
      />
      <HelloText>Hello</HelloText>
      <SwitchUserField
        defaultValue="lucy"
        bordered={false}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy Brain" },
          { value: "Yiminghe", label: "yiminghe" },
        ]}
      />
      <LiveMetricsButton
        type="primary"
        icon={<ContainerOutlined />}
        size={"large"}
      >
        Live metrics
      </LiveMetricsButton>
    </UserMenuWrapper>
  );
};

export default UserMenu;
