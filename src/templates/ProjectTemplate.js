import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import TableOfContents from "../components/TableOfContents";

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <div className="blog-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <small>{frontmatter.date}</small>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
        <TableOfContents
          title="Other projects"
          classes="blog-side-list"
          all={false}
        />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
