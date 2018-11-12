import React from "react";
import { Helmet } from "react-helmet";

export default props => (
  <div className="blog-container">
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={`${props.description}`} />
    </Helmet>
    <div className="blog-post">
      <h1>{props.title}</h1>
      <h6>{props.date}</h6>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    </div>
  </div>
);
