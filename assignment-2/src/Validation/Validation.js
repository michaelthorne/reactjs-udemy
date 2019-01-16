import React from 'react'
import './Validation.css'

const validation = (props) => {
  return (
    <p className="Validation">Length of input: <strong>{props.length}</strong></p>
  )
}

export default validation
