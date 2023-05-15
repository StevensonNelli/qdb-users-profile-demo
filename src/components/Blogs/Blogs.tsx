import React from "react";
import BlogListItem from "../BlogListItem/BlogListItem";
import apiClient from "../../api/http-common";
import { Post } from "../../types/Post";
import { UserDetailsContext } from "../../contexts/UserDetailsContext";
import { Pagination, PaginationProps, Row } from "antd";
import { CenterCard } from "./Blogs.styled";

const Blogs: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[] | null>(null);
  const [current, setCurrent] = React.useState(1);
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

  return (
    <CenterCard>
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
    </CenterCard>
  );
};

export default Blogs;
