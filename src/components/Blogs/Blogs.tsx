import React from "react";
import BlogListItem from "../BlogListItem/BlogListItem";
import apiClient from "../../api/http-common";
import { Post } from "../../types/Post";
import { UserDetailsContext } from "../../contexts/UserDetailsContext";
import { Card, Col, Pagination, PaginationProps, Row, Space, Tabs } from "antd";
import { CenterCard } from "./Blogs.styled";
import BlogHeader from "../BlogHeader/BlogHeader";

const TABS = [
  { key: "all", tab: "ALL POSTS" },
  { key: "latest", tab: "LATEST POSTS" },
  { key: "archived", tab: "ARCHIVED" },
];

const Blogs: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[] | null>(null);
  const [current, setCurrent] = React.useState(1);
  const [activeTab, setActiveTab] = React.useState<string>("all");
  const PAGE_SIZE = 3;
  const TOTAL_PAGES = 10;

  const { user } = React.useContext(UserDetailsContext);

  React.useEffect(() => {
    async function callPosts() {
      await apiClient
        .get(
          `${process.env.REACT_APP_BASE_URL}/users/${user?.id}/posts?_start=${
            PAGE_SIZE * (current - 1)
          }&&_limit=${PAGE_SIZE}`
        )
        .then((res) => setPosts(res.data))
        .catch((err) => console.log(err));
    }
    callPosts();
  }, [current, user]);

  React.useEffect(() => {}, [posts]);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const onTabChange = (key: string) => setActiveTab(key);

  return (
    <Space direction="vertical" size={24} style={{ width: "100%" }}>
      {/* <Col> */}
      <BlogHeader />
      {/* <Row align="stretch">
        <Col> */}
      <Card tabList={TABS} onTabChange={onTabChange}>
        {posts &&
          posts.map((post: Post) => {
            return <BlogListItem key={post.id} {...post} />;
          })}
        <Row justify="center">
          <Pagination
            pageSize={PAGE_SIZE}
            current={current}
            onChange={onChange}
            total={TOTAL_PAGES}
          />
        </Row>
      </Card>
      {/* </Col>
      </Row> */}
      {/* </Col> */}
    </Space>
  );
};

export default Blogs;
