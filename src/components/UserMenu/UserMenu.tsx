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
import { UserDetailsContext } from "../../contexts/UserDetailsContext";

interface UserMenuProps {
  users: User[] | [];
}

const UserMenu: React.FC<UserMenuProps> = ({ users }) => {
  const [userId, setUserId] = React.useState(() => getRandomNum());
  const { user, updateUser } = React.useContext(UserDetailsContext);

  React.useEffect(() => {
    users &&
      users.some((user) => {
        if (user.id === userId) {
          updateUser(user);
        }
        return user.id === userId;
      });
  }, [users, userId, updateUser]);

  const onUserChange = (value: any) => {
    setUserId(value);
  };

  if (!user) {
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
        src={userPics(user.id)}
      />
      <HelloText>Hello</HelloText>
      <SwitchUserField
        value={user?.name ?? ""}
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
