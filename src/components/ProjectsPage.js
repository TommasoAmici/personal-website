import React from "react";
import classNames from "classnames";
import { ParallaxLayer } from "react-spring/dist/addons";
import { Link, graphql, StaticQuery } from "gatsby";
import Slope from "./Slope";

export default ({ offset, title, caption, id, gradient }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 7
          filter: { frontmatter: { path: { regex: "/projects/" } } }
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
      const projects = data.allMarkdownRemark.edges.map((e, i) => (
        <Link
          className="no-underline"
          to={e.node.frontmatter.path}
          key={e.node.frontmatter.path}
        >
          <div
            className={classNames(
              "project hvr-shrink",
              `project-gradient-${i % 5}`
            )}
          >
            {e.node.frontmatter.title}
          </div>
        </Link>
      ));
      projects.push(
        <Link className="no-underline" to="/projects" key={"more"}>
          <div
            className={classNames(
              "project hvr-shrink",
              `project-gradient-more`
            )}
          >
            <p>...</p>
          </div>
        </Link>
      );
      return (
        <>
          <Slope offset={offset} gradient={gradient} id={id} />

          <ParallaxLayer className="text title" offset={offset} speed={0.3}>
            <span>{title}</span>
          </ParallaxLayer>

          <ParallaxLayer className="text header" offset={offset} speed={0.4}>
            <span>
              <p className="caption">{caption}</p>
              <div className={classNames("stripe", gradient)} />
              <div className="projects-container">{projects}</div>
            </span>
          </ParallaxLayer>
        </>
      );
    }}
  />
);
