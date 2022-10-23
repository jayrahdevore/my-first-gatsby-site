import * as React from "react"
import { graphql } from 'gatsby'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  textAlign: "center"
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const imageStyle = {
  textAlign: "center"
}

const RecipePage = ({data}) => {
  return (
    <main style={pageStyles}>
      <h1 stype={headingStyles}>
        {data.Drupal.nodeRecipe.title}
      </h1>
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
    </main>
  )
}

//export const Head = ({data}) => <title>Home Page</title>

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
