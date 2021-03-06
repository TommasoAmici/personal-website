const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const projectPostTemplate = path.resolve(`src/templates/ProjectTemplate.js`);
  const blogPostTemplate = path.resolve(`src/templates/BlogTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { path: { ne: "/about/raw" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              posttype
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.posttype == "project") {
        createPage({
          path: node.frontmatter.path,
          component: projectPostTemplate,
          context: {} // additional data can be passed via context
        });
      } else {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {} // additional data can be passed via context
        });
      }
    });
  });
};
