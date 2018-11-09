import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import classNames from "classnames";

export default props => {
  const query = graphql`
    query {
      allMarkdownRemark(
        limit: 100
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
          content.unshift(
            <li key="otherpostsli">
              <h2>{props.title}</h2>
            </li>
          );
        }
        const classes = classNames("blog-list", props.classes);
        return <ul className={classes}>{content}</ul>;
      }}
    />
  );
};
