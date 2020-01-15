// const { createFilePath } = require(`gatsby-source-filesystem`)
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

const path = require("path");

const _ = require("lodash")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
  
    if (_.get(node, "internal.type") === `MarkdownRemark`) {
      // Get the parent node
      const parent = getNode(_.get(node, "parent"));
  
      // Create a field on this node for the "collection" of the parent
      // NOTE: This is necessary so we can filter `allMarkdownRemark` by
      // `collection` otherwise there is no way to filter for only markdown
      // documents of type `post`.
      createNodeField({
        node,
        name: "collection",
        value: _.get(parent, "sourceInstanceName")
      });
    }
  };


// exports.createPages = async function({ actions, graphql }) {
//     const { data } = await graphql(`
//       query {
//         allMarkdownRemark {
//           edges {
//             node {
//               fileAbsolutePath
//               frontmatter {
//                   title
//                   path
//               }
//             }
//           }
//         }
//       }
//     `)
//     const projects = data.allMarkdownRemark.edges
//     projects.forEach(node => {
//     //   const slug = node.fields.slug
//       actions.createPage({
//         path: node.frontmatter.path,
//         component: require.resolve(`./src/templates/projectPage.js`),
//         // context: { slug: slug },
//         contextpathSlug: node.frontmatter.path,
//         absolutePathRegex: `/^${path.dirname(node.fileAbsolutePath)}/`,
//       })
//     })
//   }

// exports.createPages = ({ actions, graphql }) => {
//     const {createPage} = actions;


// return new Promise((resolve, reject) => {
//     const projectPostTemplate = path.resolve(`src/templates/projectPageTem.js`);
//     // const projectTagPage = path.resolve('src/templates/productTags.jsx');

    
//     // const replacePath = path => (path === `/` ? path : path.replace(/\/$/,``))

//     resolve(
//          graphql(`{
//             projects: allMarkdownRemark(
//                 filter: {fields: {collection: {eq: "projects"}}}
//                 sort: { order: DESC, fields: [frontmatter___date] }
//                 limit: 1000
//                 ){
//                 edges {
//                     node {
//                         fileAbsolutePath
//                         id
//                         frontmatter {
//                             title
//                             path
//                         }
//                     }
//                 }
//             }      
//         }`).then(result => {
//         if (result.errors){
//             return reject(result.errors);
//         }

//         const projects = result.data.projects.edges;

//         projects.forEach(({node}) => {
//             // const path = node.frontmatter.path;

//             createPage({
//                 path: node.frontmatter.path,
//                 component: projectPostTemplate,
//                 context: {
//                     contextpathSlug: node.frontmatter.path,
//                     // Pass the current directory of the project as regex in context so that the GraphQL query can filter by it
//                     absolutePathRegex: `/^${path.dirname(node.fileAbsolutePath)}/`,
//                 }
                
//             });
//         });
        

//     })
//     )
// }
// )
// }