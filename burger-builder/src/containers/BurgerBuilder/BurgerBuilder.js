import React, { Component } from 'react'

import Aux from '../../hoc/Aux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  }

  updatePurchaseState (ingredients) {
    // Get the total amount of ingredients
    const sum = Object.keys(ingredients).map(ingredientKey => {
      // Get the amount for each ingredient
      return ingredients[ingredientKey]
    }).reduce((sum, el) => {
      return sum + el
    }, 0)

    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
    this.updatePurchaseState(updateIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return
    }
    const updatedCount = oldCount - 1
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceDeduction
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
    this.updatePurchaseState(updateIngredients)
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for (let key in disabledInfo) {
      // Set the state (true|false) for each ingredient
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    // { salad: true, meat: false, ... }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}/>
      </Aux>
    )
  }
}

export default BurgerBuilder