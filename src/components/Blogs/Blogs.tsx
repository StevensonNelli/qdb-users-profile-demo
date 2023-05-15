import React from "react";
import BlogListItem from "../BlogListItem/BlogListItem";
import apiClient from "../../api/http-common";
import { Post } from "../../types/Post";
import { UserDetailsContext } from "../../contexts/UserDetailsContext";

const Blogs: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[] | null>(null);
  const { user } = React.useContext(UserDetailsContext);

  async function callPosts() {
    await apiClient
      .get(`${process.env.REACT_APP_BASE_URL}/users/${user?.id}/posts`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    callPosts();
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post: Post) => {
          return <BlogListItem key={post.id} {...post} />;
        })}
    </div>
  );
};

export default Blogs;
