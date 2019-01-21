import React from 'react'
import './Validation.css'

const validation = (props) => {
  let validationMessage = 'Text long enough! :D'

  if (props.length <= 5) {
    validationMessage = 'Text too short! :<'
  }

  return (
    <div className="Validation">
      <p>Length of input: <strong>{props.length}</strong></p>
      <p>{validationMessage}</p>
    </div>
  )
}

export default validation
