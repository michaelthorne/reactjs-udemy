import React from 'react'

const userOutput = (props) => {
  const style = {
    'border': '2px solid #ccc',
    'borderRadius': '4px',
    'margin': '8px auto',
    'maxWidth': '240px',
    'padding': '2px'
  }

  return (
    <div style={style}>
      <h2>UserOutput</h2>
      <p>Username: {props.username}</p>
      <p>This is my first paragraph!</p>
      <p>This is some amazing text.</p>
    </div>
  )
}

export default userOutput
