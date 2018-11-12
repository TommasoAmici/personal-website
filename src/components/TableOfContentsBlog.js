import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import classNames from "classnames";

export default props => {
  const query = graphql`
    query {
      allMarkdownRemark(
        limit: 100
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { posttype: { eq: "blog" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={query}
      render={data => {
        const content = data.allMarkdownRemark.edges.map(e => (
          <li key={e.node.frontmatter.path}>
            <Link to={e.node.frontmatter.path}>{e.node.frontmatter.title}</Link>
          </li>
        ));
        if (props.title) {
          content.unshift(<h3 key="h3title">{props.title}</h3>);
        }
        const classes = classNames("blog-list", props.classes);
        return <ul className={classes}>{content}</ul>;
      }}
    />
  );
};
