import React from "react";

export default props => (
  <div className="blog-container">
    <div className="blog-post">
      <h1>{props.title}</h1>
      <small>{props.date}</small>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    </div>
  </div>
);
