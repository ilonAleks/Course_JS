import React from "react";

const PostsList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <h3 key={post.id}>{post.label}</h3>
      ))}
    </>
  );
};

export default PostsList;
