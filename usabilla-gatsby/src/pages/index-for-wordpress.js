// import React from "react"
// import {css} from "@emotion/core"
// import {Link, graphql} from "gatsby"
// import {rhythm} from "../utils/typography"
// import Layout from "../components/layout"
//
// export default ({data}) => {
//     return (
//         <Layout>
//             <div>
//                 <h1
//                     css={css`
//             display: inline-block;
//             border-bottom: 1px solid;
//           `}
//                 >
//                     All Pages from the website
//                 </h1>
//                 <h4>{data.allWordpressPage.totalCount} Pages</h4>
//                 {data.allWordpressPage.edges.map(({node}) => (
//
//                     <div key={node.id}>
//                         <Link
//                             to={node.slug}
//                             css={css`
//                 text-decoration: none;
//                 color: inherit;
//               `}
//                         >
//                             <h3
//                                 css={css`
//                   margin-bottom: ${rhythm(1 / 4)};
//                 `}
//                             >
//                                 <div dangerouslySetInnerHTML={{__html: node.title}}/>{" "}
//                                 <span
//                                     css={css`
//                     color: #bbb;
//                   `}
//                                 >
//                   — {node.date}
//                 </span>
//                             </h3>
//                             <div dangerouslySetInnerHTML={{__html: node.excerpt}}/>
//
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </Layout>
//     )
// }
//
// // Example of querying data using graphql
// // export const query = graphql`
// //   query {
// //   allWordpressPage(sort: { fields: [date], order: DESC }) {
// //       totalCount
// //       edges {
// //         node {
// //           id
// //           title
// //           date(formatString: "DD MMMM, YYYY")
// //           slug
// //           excerpt
// //         }
// //       }
// //     }
// //   }
// // `