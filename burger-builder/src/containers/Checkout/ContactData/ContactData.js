import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import Spinner from '../../../components/UI/Spinner/Spinner'

import axios from '../../../axios-orders'

import classes from './ContactData.module.css'

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          placeholder: 'Your name',
          type: 'text'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          placeholder: 'Your street',
          type: 'text'
        },
        value: ''
      },
      zipcode: {
        elementType: 'input',
        elementConfig: {
          placeholder: 'Your zipcode',
          type: 'text'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          placeholder: 'Your country',
          type: 'text'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          placeholder: 'Your email',
          type: 'email'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: 'fastest',
              displayValue: 'Fastest'
            },
            {
              value: 'cheapest',
              displayValue: 'Cheapest'
            },
          ]
        },
        value: ''
      },
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault()
    this.setState({ loading: true })

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ loading: false })
      })
  }

  inputChangedHandler = (event, inputIdentifier) => {
    // Clone of original orderForm
    const updatedOrderForm = {
      ...this.state.orderForm
    }

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }

    updatedFormElement.value = event.target.value
    updatedOrderForm[inputIdentifier] = updatedFormElement
    this.setState({
      orderForm: updatedOrderForm
    })
  }

  render() {
    const formElementsArray = []
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }

    let form = (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
          ))}

          <Button
            buttonType="Success"
            clicked={this.orderHandler}>ORDER</Button>
        </form>
      </div>
    )

    if (this.state.loading) {
      form = <Spinner />
    }
    return form
  }
}

export default ContactData