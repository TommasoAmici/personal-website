import React from "react";
import classNames from "classnames";
import { ParallaxLayer } from "react-spring/dist/addons";
import { Link, graphql, StaticQuery } from "gatsby";

export default ({
  offset,
  title,
  caption,
  first,
  second,
  paragraph,
  gradient,
  onClick
}) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { path: { regex: "/things-i-like/" } } }
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
    `}
    render={data => {
      console.log(data);
      const things = data.allMarkdownRemark.edges.map(e => (
        <li key={e.node.frontmatter.path}>
          <Link to={e.node.frontmatter.path}>{e.node.frontmatter.title}</Link>
        </li>
      ));
      return (
        <>
          <ParallaxLayer offset={offset} speed={0.2}>
            <div className="slopeBegin" />
          </ParallaxLayer>

          <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
            <div className={classNames("slopeEnd", gradient)} />
          </ParallaxLayer>

          {title && (
            <ParallaxLayer className="text title" offset={offset} speed={0.3}>
              <span>{title}</span>
            </ParallaxLayer>
          )}

          <ParallaxLayer className="text header" offset={offset} speed={0.4}>
            <span>
              <p className="caption">{caption}</p>
              <div className={classNames("stripe", gradient)} />
              <ul className="blog-list">{things}</ul>
            </span>
          </ParallaxLayer>
        </>
      );
    }}
  />
);
