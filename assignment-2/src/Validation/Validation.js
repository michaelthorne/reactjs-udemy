import React from 'react'
import './Validation.css'

const validation = (props) => {
  return (
    <div className="Validation">
      <p>Length of input: <strong>{props.length}</strong></p>
      <p>{props.length > 5 ? 'Text long enough! :D' : 'Text too short! :<'}</p>
    </div>
  )
}

export default validation
