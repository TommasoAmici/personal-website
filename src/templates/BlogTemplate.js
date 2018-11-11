import React from "react";
import { graphql } from "gatsby";
import { NavbarAlt } from "../components/Navbar";
import TableOfContentsBlog from "../components/TableOfContentsBlog";
import Post from "./Post";

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <NavbarAlt />
      <div className="page-container">
        <Post title={frontmatter.title} date={frontmatter.date} html={html} />
        <TableOfContentsBlog
          title="Other posts"
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
