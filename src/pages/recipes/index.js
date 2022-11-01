import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Recipes">
      {
        data.Drupal.nodeRecipes.edges.map(node => (
          <article key={node.node.id}>
            <Link to={`/recipes/${node.node.id}`}>
              {node.node.title}
            </Link>
          </article>
        ))
      }
    </Layout>
  )
}
export const query = graphql`
query {
  Drupal {
    nodeRecipes(last: 50) {
      edges {
        node {
         id
         title
        }
      }
    }
  }
}
`
export const Head = () => <Seo title="My Blog Posts" />
export default BlogPage
