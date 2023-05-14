import React from "react";
import {
  CalendarOutlined,
  FieldTimeOutlined,
  FundViewOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  NotificationOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { NavMenu } from "./SideNavMenu.styled";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem(
    "Dashboards",
    "dashboards",
    null,
    [
      getItem("Overview", "overview", <FundViewOutlined />),
      getItem("Calender", "calender", <CalendarOutlined />),
      getItem("Schedule Actions", "schedule-actions", <FieldTimeOutlined />),
      getItem("Live Alerts", "live-alerts", <NotificationOutlined />),
    ],
    "group"
  ),

  getItem(
    "Blogs",
    "blogs",
    null,
    [
      getItem("All", "all", <MessageOutlined />),
      getItem("Latest", "latest", <InfoCircleOutlined />),
      getItem("Archived", "archived", <WalletOutlined />),
    ],
    "group"
  ),

  getItem("Documentation", "sub1", null, [getItem("Item 1", "1")]),

  { type: "divider" },

  getItem("Reports", "sub2", null, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),

  { type: "divider" },

  getItem("Need A Help", "sub4", null, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
  { type: "divider" },
];

const SideNavMenu: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <NavMenu
      onClick={onClick}
      defaultSelectedKeys={["all"]}
      defaultOpenKeys={["blogs"]}
      mode="inline"
      items={items}
    />
  );
};

export default SideNavMenu;
