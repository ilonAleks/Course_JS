import Post from "./post.jsx";
import query from "query-string";
import PostList from "./postsList.jsx";
import _ from "lodash";

const Posts = ({ match, location }) => {
  const posts = [
    { id: 1, label: "post 1" },
    { id: 2, label: "post 2" },
    { id: 3, label: "post 3" },
  ];
  const search = query.parse(location.search);
  const postId = match.params.postId;
  const cropPosts = search
    ? _(posts).slice(0).take(search.count).value()
    : posts;
  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostList posts={cropPosts} />
      )}
    </>
  );
};

export default Posts;
