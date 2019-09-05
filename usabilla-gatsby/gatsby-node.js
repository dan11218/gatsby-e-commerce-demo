const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)





// Example of creating pages from wordpress
exports.createPages = async({ graphql, actions }) => {
    console.log("IM IN CREATE PAGES")
    const { createPage } = actions
    return graphql(`
    {
      allWordpressPage(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
    }
  `).then(result => {
        console.log(JSON.stringify(result, null, 4))

        result.data.allWordpressPage.edges.forEach(({ node }) => {
            console.log("creating the " + node.slug + " page")
            createPage({
                path: node.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    // This is the $slug variable
                    // passed to blog-post.js
                    slug: node.slug,
                },
            })
        })
    })
}


// // Example of creating pages from markdowns
//
// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === `MarkdownRemark`) {
//         const slug2 = createFilePath({ node, getNode, basePath: `pages` })
//         createNodeField({
//             node,
//             name: `slug`,
//             value: slug2,
//         })
//     }
// }
// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//             path: node.fields.slug,
//             component: path.resolve(`./src/templates/blog-post.js`),
//             context: {
//                 // Data passed to context is available
//                 // in page queries as GraphQL variables.
//                 slug: node.fields.slug,
//             },
//         })
//     })
// }
//
// // End of markdown example

