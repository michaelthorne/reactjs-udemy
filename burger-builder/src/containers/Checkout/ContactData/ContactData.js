import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'

import axios from '../../../axios-orders'

import classes from './ContactData.module.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault()
    this.setState({ loading: true })

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Michael Thorne',
        address: {
          street: '123 Street, Cape Town',
          zipcode: '123123',
          country: 'South Africa'
        },
        email: 'test@email.com',
        deliveryMethod: 'collect'
      }
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

  render () {
    let form = (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your name" />
          <input className={classes.Input} type="email" name="name" placeholder="Your email" />
          <input className={classes.Input} type="text" name="name" placeholder="Your street" />
          <input className={classes.Input} type="text" name="name" placeholder="Your postal code" />

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