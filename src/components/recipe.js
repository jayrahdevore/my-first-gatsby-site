import * as React from 'react'
const RecipePage = ({ data }) => {
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
