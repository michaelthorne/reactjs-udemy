import React, { Component } from 'react'

import classes from './Modal.module.scss'

import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
  componentWillUpdate (nextProps, nextState, nextContext) {
    console.log('[Modal] WillUpdate')
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    // Only render the order summary if the modal is shown
    return nextProps.show !== this.props.show
  }

  render () {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            opacity: this.props.show ? '1' : '0',
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
          }}>
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

export default Modal