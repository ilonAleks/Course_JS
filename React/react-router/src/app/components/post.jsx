import React from "react";

const Post = ({ id, posts }) => {
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  const post = getPostById(id);
  return <h2>{post ? post.label : `Post with id:${id} not found`}</h2>;
};

export default Post;
