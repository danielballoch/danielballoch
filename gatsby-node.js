const path = require("path");

const _ = require("lodash");
// const { default: Template } = require("./src/templates/prismic-post");

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


  exports.createPages = ({ actions, graphql }) => {
    const {createPage} = actions;

 return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogTemplate.js');
    const blogTagTemplate= path.resolve('src/pages/blog.jsx');
    const blogTemplate = path.resolve('src/templates/prismic-post.js');
    resolve(
         graphql(`{
            posts: allMarkdownRemark(
                filter: {fields: {collection: {eq: "posts"}}}
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
                ){
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            path
                            date
                            title
                            tags
                        }
                    }
                }
            }
            blog: allPrismicBlogPost {
                nodes {
                  id
                  uid
                  data {
                    date
                  }
                }
              }   
        }`).then(result => {
        if (result.errors){
            return reject(result.errors);
        }

        //shorten links
        const posts = result.data.posts.edges;
        const blog = result.data.blog.nodes;
       
        //tag

        const postsByTag = {};
        // create post tags page
        posts.forEach(({ node }) => {
          if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
              if (!postsByTag[tag]) {
                postsByTag[tag] = [];
              }
              postsByTag[tag].push(node);
            });
          }
        });
        
        const postTags = Object.keys(postsByTag);
        //create tags
        postTags.forEach(tagName => {
          const posts = postsByTag[tagName];

          createPage({
            path: `/blog/${tagName}`,
            component: blogTagTemplate,
            context: {
              postList: postTags,
              posts,
              tagName,
            },
          });
        });


        //create post pages
        posts.forEach(({node}, index) => {
            const path = node.frontmatter.path;
            const prev = index === 0 ? null : posts[index -1].node;
            const next = index === posts.length - 1 ? null : posts[index + 1].node;
            createPage({
                path,
                component: blogPostTemplate,
                context: {
                    pathSlug: path,
                    prev,
                    next,
                }
            });
        });

       
          //create prismic blog pages
          
        
          // Create pages for each Page in Prismic using the selected template.
          blog.forEach((node) => {
            createPage({
              path: `/${node.uid}`,
              component: blogTemplate,
              context: {
                id: node.id,
                uid: node.uid
              },
            })
          })


        //end
        

        
    })
    );
});     
};



// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // Query all Pages with their IDs and template data.
//   const pages = await graphql(`
//     {
//       allPrismicBlogPost {
//         nodes {
//           id
//           uid
//           data {
//             template
//           }
//         }
//       }
//     }
//   `)

  
// }

