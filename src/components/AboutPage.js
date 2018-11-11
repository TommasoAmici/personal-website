import React from "react";
import classNames from "classnames";
import { ParallaxLayer } from "react-spring/dist/addons";
import { graphql, StaticQuery } from "gatsby";
import Slope from "./Slope";

export default ({ offset, gradient }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { title: { regex: "/About me/" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    `}
    render={data => {
      const about = data.allMarkdownRemark.edges[0].node;
      return (
        <>
          <Slope offset={offset} gradient={gradient} />

          <ParallaxLayer className="text header" offset={offset} speed={0.4}>
            <span>
              <h2>{about.frontmatter.title}</h2>
              <div className={classNames("stripe", gradient)} />
              <div
                className="about-content"
                dangerouslySetInnerHTML={{ __html: about.html }}
              />
            </span>
          </ParallaxLayer>
        </>
      );
    }}
  />
);
