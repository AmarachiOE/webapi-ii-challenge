import React from "react";

const PostsList = props => {
  return (
    <div className="PostsList-container">
      <h1>List of Posts:</h1>
      {props.posts.map(post => (
        <div key={post.id} className="each-post">
          <h3>{post.title}</h3>
          <p>{post.contents}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
