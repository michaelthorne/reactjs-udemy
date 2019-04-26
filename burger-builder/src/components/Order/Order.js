import React from 'react'

import classes from './Order.module.css'

const order = (props) => {
  const ingredients = []

  for (let ingredientName in props.ingredients) {
    ingredients.push(
      {
        name: ingredientName,
        amount: props.ingredients[ingredientName]
      }
    )
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span
      style={{
        border: '0.0625em solid #ccc',
        display: 'inline-block',
        margin: '0 0.5em',
        padding: '0.25em',
        textTransform: 'capitalize'
      }}
      key={ig.name}>{ig.name} ({ig.amount})</span>
  })

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default order