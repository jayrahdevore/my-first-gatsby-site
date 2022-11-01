import React from "react"
import { graphql } from "gatsby"
//import Layout from "../components/layout"
import Layout from '../components/layout'
        //<div style={imageStyle}>
        //  //<img
        //  //  src={data.Drupal.nodeRecipe.mediaImage.mediaImage.url}
        //  //  alt={data.Drupal.nodeRecipe.title}
        //  //  style={imageStyle}
        //  //  width={200}
        //  //  height={200}
        //  ///>
        //</div>
const imageStyle = {
  textAlign: "center"
}

export default function Recipe({ data }) {
      //const post = data.markdownRemark
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
        <b>Prep time:</b> {data.Drupal.nodeRecipe.preparationTime}
        <br />
        <b>Cooking time:</b> {data.Drupal.nodeRecipe.cookingTime}
        <br />
        <div dangerouslySetInnerHTML={{ __html: data.Drupal.nodeRecipe.recipeInstruction.processed }} />
      </Layout>
   )
// }
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
// import * as React from 'react'
// import { graphql } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import Layout from '../../components/layout'
// import Seo from '../../components/seo'
// 
// const imageStyle = {
//   textAlign: "center"
// }
// 
// const RecipePage = ({data}) => {
//   return (
//     <Layout pageTitle={data.Drupal.nodeRecipe.title}>
//       <div style={imageStyle}>
//         <img
//           src={data.Drupal.nodeRecipe.mediaImage.mediaImage.url}
//           alt={data.Drupal.nodeRecipe.title}
//           style={imageStyle}
//           width={200}
//           height={200}
//         />
//       </div>
//       <b>Serves:</b> {data.Drupal.nodeRecipe.numberOfServings}
//       <br />
//       <b>Difficulty:</b> {data.Drupal.nodeRecipe.difficulty}
//       <br />
//       <b>Cooking time:</b> {data.Drupal.nodeRecipe.cookingTime}
//      
//       <div dangerouslySetInnerHTML={{ __html: data.Drupal.nodeRecipe.recipeInstruction.processed }} />
//     </Layout>
//   )
// }
// 
// 
// export const query = graphql`
// query ($id: ID!) {
//   Drupal {
//     nodeRecipe(id: $id) {
//       path
//       title
//       numberOfServings
//       recipeInstruction {
//         processed
//         }
//       difficulty
//       cookingTime
//       mediaImage {
//         mediaImage {
//           url
//         }
//       }
//     }
//   }
// }
// 
// `
// 
// export const Head = ({ data }) => <Seo title={data.Drupal.nodeRecipe.title} />
// 
// export default RecipePage
// 
// 
// 
// 
// 
// //export const Head = ({data}) => <title>Home Page</title>







