import * as React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const imageStyle = {
  textAlign: "center"
}

const RecipePage = ({data}) => {
  return (
    <Layout pageTitle={data.Drupal.nodeRecipe.title}>
      <div style={imageStyle}>
        <img
          src={data.Drupal.nodeRecipe.mediaImage.mediaImage.url}
          alt={data.Drupal.nodeRecipe.title}
          style={imageStyle}
          width={200}
          height={200}
        />
      </div>
      <b>Serves:</b> {data.Drupal.nodeRecipe.numberOfServings}
      <br />
      <b>Difficulty:</b> {data.Drupal.nodeRecipe.difficulty}
      <br />
      <b>Cooking time:</b> {data.Drupal.nodeRecipe.cookingTime}
     
      <div dangerouslySetInnerHTML={{ __html: data.Drupal.nodeRecipe.recipeInstruction.processed }} />
    </Layout>
  )
}

//export const Head = ({data}) => <title>Home Page</title>





export const Head = () => <Seo title="Recipe"/>

export const query = graphql`
query MyQuery {
      Drupal {
              nodeRecipe(id: "3943a612-cd12-48e7-aeda-25d974aa533b") {
                        path
                        title
                        numberOfServings
                        recipeInstruction {
                                    processed
                                  }
                        difficulty
                        cookingTime
                        mediaImage {
                                    mediaImage {
                                                  url
                                                }
                                  }
                      }
            }
}
`

export default RecipePage
