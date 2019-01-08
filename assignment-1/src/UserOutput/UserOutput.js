import React from 'react'

const userOutput = (props) => {
  return (
    <div style={props.style}>
      <h2>UserOutput</h2>
      <p>Username: {props.username}</p>
      <p>This is my first paragraph!</p>
      <p>This is some amazing text.</p>
    </div>
  )
}

export default userOutput
