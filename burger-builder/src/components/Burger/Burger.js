import React from 'react'

import classes from './Burger.module.scss'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  // Map the ingredients Object into an array of ingredients
  let transformedIngredients = Object.keys(props.ingredients).map(
    ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
      })
    }
  ).reduce((arr, el) => {
    // Flatten the transformed array
    return arr.concat(el)
  }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients.</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger