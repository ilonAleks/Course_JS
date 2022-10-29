import React from "react";

const Post = ({ id, posts, history }) => {
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  const post = getPostById(id);
  const handleSave = () => {
    history.replace("/posts");
  };
  return (
    <>
      <h2>{post ? post.label : `Post with id:${id} not found`}</h2>
      <button onClick={() => handleSave()}>Save</button>
    </>
  );
};

export default Post;
