import React from 'react'

import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.scss'

const controls = [
  {
    label: 'Bacon',
    type: 'bacon'
  },
  {
    label: 'Cheese',
    type: 'cheese'
  },
  {
    label: 'Meat',
    type: 'meat'
  },
  {
    label: 'Salad',
    type: 'salad'
  },
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}/>
    ))}
  </div>
)

export default buildControls