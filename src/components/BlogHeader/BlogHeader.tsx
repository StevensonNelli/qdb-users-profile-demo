import { MessageOutlined } from "@ant-design/icons";
import { Avatar, Button, Row, Select, Space, Typography } from "antd";
import React from "react";

const BlogHeader: React.FC = () => {
  return (
    <Row align="middle" justify={"space-between"}>
      <Space wrap>
        <Avatar
          style={{ backgroundColor: "#397bf6" }}
          shape="square"
          size={64}
          icon={<MessageOutlined />}
        />
        <Typography>
          <Typography style={{ fontSize: 16, fontWeight: 600 }}>
            All Blog posts
          </Typography>
          <Typography style={{ color: "gray" }}>
            Qatar Development Bank
          </Typography>
        </Typography>
      </Space>
      <Select placeholder="Filter/Sort" style={{ width: 120 }} options={[]} />
    </Row>
  );
};

export default BlogHeader;
