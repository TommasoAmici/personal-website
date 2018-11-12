import React from "react";
import classNames from "classnames";
import { ParallaxLayer } from "react-spring/dist/addons";
import { Link, graphql, StaticQuery } from "gatsby";
import Slope from "./Slope";

export default ({ offset, title, caption, gradient }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
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
    `}
    render={data => {
      const things = data.allMarkdownRemark.edges.map(e => (
        <li key={e.node.frontmatter.path}>
          <Link to={e.node.frontmatter.path}>{e.node.frontmatter.title}</Link>
        </li>
      ));
      return (
        <>
          <Slope offset={offset} gradient={gradient} />

          <ParallaxLayer className="text title" offset={offset} speed={0.3}>
            <span>{title}</span>
          </ParallaxLayer>

          <ParallaxLayer className="text header" offset={offset} speed={0.4}>
            <span>
              <h1 className="caption">{caption}</h1>
              <div className={classNames("stripe", gradient)} />
              <ul className="misc-list">{things}</ul>
              <div className="archive-link">
                <Link to="/misc-archive">Archive</Link>
              </div>
            </span>
          </ParallaxLayer>
        </>
      );
    }}
  />
);
