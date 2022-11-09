import React from "react"
import { motion } from "framer-motion";

const imageStyle = {
  textAlign: "center"
}

//const RecipeInfo
export function RecipeImage ({ data }) {
	return (
    <div style={imageStyle}>
      <motion.img
	initial={{ opacity: 0, scale: 0.5 }}
	animate={{ opacity: 1, scale: 1 }}
	transition={{ duration: 0.5 }}
        src={data.Drupal.nodeRecipe.mediaImage.mediaImage.url}
        alt={data.Drupal.nodeRecipe.title}
        style={imageStyle}
        width={200}
        height={200}
      />
    </div>
	)
}

export function RecipeInfo ({ data }) {
  return (
    <div>
    <b>Serves:</b> {data.Drupal.nodeRecipe.numberOfServings}
    <br />
    <b>Difficulty:</b> {data.Drupal.nodeRecipe.difficulty}
    <br />
    <b>Prep time:</b> {data.Drupal.nodeRecipe.preparationTime}
    <br />
    <b>Cooking time:</b> {data.Drupal.nodeRecipe.cookingTime}
    </div>
  )
}

export function RecipeText ({ data }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: data.Drupal.nodeRecipe.recipeInstruction.processed }} />
  )
}
