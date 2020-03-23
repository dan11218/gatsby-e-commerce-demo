const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
  }

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//     const products = [
//       { id: 1, name: "Usabilla Coffee", price: "€18.00", photo: "../../../static/assets/coffee.png", description: "Intense Blend" },
//       { id: 2, name: "Usabilla Hoodie", price: "€30.00", photo: "../../../static/assets/hoodie.png'", description: "Blue | 100% cotton" },
//       { id: 3, name: "Usabilla T-Shirt", price: "€25.00", photo: "../../../static/assets/shirt.png", description: "Grey | 100% Cotton" },
//       { id: 4, name: "Canvas Bag", price: "€14.00", photo: "../../../static/assets/canvas-tote-bag.png", description: "White" },
//       { id: 5, name: "Pen", price: "€10.00", photo: "../../../static/assets/pen.png", description: "Black | Ballpoint" },
//       { id: 6, name: "Planner", price: "€13.00", photo: "../../../static/assets/planner.png", description: "Black" }
//     ]
  
//     products.forEach(product => {
//       const node = {
//         name: product.name,
//         price: product.price,
//         photo: product.photo,
//         description: product.description,
//         id: createNodeId(`Products-${product.id}`),
//         internal: {
//           type: "product",
//           contentDigest: createContentDigest(product),
//         },
//       }
//       actions.createNode(node)
//     })
// }



// Example of creating pages from wordpress
// exports.createPages = async({ graphql, actions }) => {
//     console.log("IM IN CREATE PAGES")
//     const { createPage } = actions
//     return graphql(`
//     {
//       allWordpressPage(sort: { fields: [date] }) {
//         edges {
//           node {
//             title
//             excerpt
//             content
//             slug
//           }
//         }
//       }
//     }
//   `).then(result => {
//         console.log(JSON.stringify(result, null, 4))
//
//         result.data.allWordpressPage.edges.forEach(({ node }) => {
//             console.log("creating the " + node.slug + " page")
//             createPage({
//                 path: node.slug,
//                 component: path.resolve(`./src/templates/blog-post.js`),
//                 context: {
//                     // This is the $slug variable
//                     // passed to blog-post.js
//                     slug: node.slug,
//                 },
//             })
//         })
//     })
// }


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

