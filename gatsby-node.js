const path = require(`path`)

//exports.createPages = async ({ graphql, actions }) => {
//  const { createPage } = actions
//
//  const result = await graphql(`
//    query {
//      Drupal {
//        nodeRecipes(last: 100) {
//          edges {
//            node {
//              id
//            }
//          }
//        }
//      }
//    }
//  `)
//
//  // Handle errors
//  if (result.errors) {
//    reporter.panicOnBuild(`Error while running GraphQL query.`)
//    return
//  }
//
//  const recipeTemplate = path.resolve('src/templates/recipe-template.js')
//
//  //result.Drupal.nodeRecipes.edges.forEach(({ node })) => {
//  //    const path = node.id
//  //    createPath({
//  //        path,
//  //        component: recipeTemplate,
//  //    })
//  //}
//
//  //// Create pages for each markdown file.
//  //const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
//  //result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//  //  const path = node.frontmatter.path
//  //  createPage({
//  //    path,
//  //    component: blogPostTemplate,
//  //    // In your blog post template's graphql query, you can use pagePath
//  //    // as a GraphQL variable to query for data from the markdown file.
//  //    context: {
//  //      pagePath: path,
//  //    },
//  //  })
//  //})
//  
////  result.data.Drupal.nodeRecipes.forEach((node) => {
////    createPage({
////      path: NODE_SLUG,
////      component: recipeTemplate,
////      context: {
////        slug: NODE_SLUG,
////      },
////    })
////  })
////}
exports.createPages = async function ({ actions, graphql }) {

  const { data } = await graphql(`
    query {
      Drupal {
        nodeRecipes(last: 100) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  `)
  const recipeTemplate = path.resolve('src/templates/recipe-template.js')
  data.Drupal.nodeRecipes.edges.forEach(edge => {
    actions.createPage({
      path: "/recipes/" + edge.node.id,
      component: recipeTemplate,
      context: { recipe_id: edge.node.id },
    })
  })
}
