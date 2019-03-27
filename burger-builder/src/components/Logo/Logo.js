import React from 'react'

import classes from './Logo.module.scss'
import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Burger logo" />
  </div>
)

export default logo