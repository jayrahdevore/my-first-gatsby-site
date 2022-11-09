import React from "react"
import { graphql } from "gatsby"
//import Layout from "../components/layout"
import Layout from '../components/layout'
import {RecipeImage, RecipeInfo, RecipeText} from '../components/recipe-parts'
        //<div style={imageStyle}>
        //  //<img
        //  //  src={data.Drupal.nodeRecipe.mediaImage.mediaImage.url}
        //  //  alt={data.Drupal.nodeRecipe.title}
        //  //  style={imageStyle}
        //  //  width={200}
        //  //  height={200}
        //  ///>
        //</div>


export default function Recipe({ data }) {
  return (
  <Layout pageTitle={data.Drupal.nodeRecipe.title}>
    <RecipeImage data={data}/>
    <RecipeInfo data={data}/>
    <RecipeText data={data}/>
  </Layout>
  )
}

export const query = graphql`
query ($recipe_id: ID!) {
  Drupal {
    nodeRecipe(id: $recipe_id) {
      path
      title
      numberOfServings
      recipeInstruction {
        processed
        }
      difficulty
      cookingTime
      preparationTime
      mediaImage {
        mediaImage {
          url
        }
      }
    }
  }
}
`
