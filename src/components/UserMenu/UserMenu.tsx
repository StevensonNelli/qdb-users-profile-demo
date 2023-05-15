import { ContainerOutlined, LoadingOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import {
  HelloText,
  LiveMetricsButton,
  SwitchUserField,
  UserMenuWrapper,
} from "./UserMenu.styled";
import { User } from "../../types/User";
import { getRandomNum, userPics } from "../../helpers/util-methods";

interface UserMenuProps {
  users: User[] | [];
}

const UserMenu: React.FC<UserMenuProps> = ({ users }) => {
  const [userId, setUserId] = React.useState(() => getRandomNum());
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    users &&
      users.some((user) => {
        if (user.id === userId) {
          setCurrentUser(user);
        }
        return user.id === userId;
      });
  }, [users, userId]);

  const onUserChange = (value: any) => {
    setUserId(value);
  };

  if (!currentUser) {
    return (
      <div
        style={{
          height: 201,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingOutlined />
      </div>
    );
  }

  return (
    <UserMenuWrapper>
      <Avatar
        size={64}
        style={{ backgroundColor: "#ccc" }}
        src={userPics(currentUser.id)}
      />
      <HelloText>Hello</HelloText>
      <SwitchUserField
        value={currentUser?.name ?? ""}
        bordered={false}
        options={users}
        fieldNames={{ label: "name", value: "id" }}
        onSelect={onUserChange}
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
