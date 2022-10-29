import React from "react";
import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} to={`posts/${post.id}`}>
          <h3>{post.label}</h3>
        </Link>
      ))}
    </>
  );
};

export default PostsList;
