import React from 'react'
import './UserInput.css'

const userInput = (props) => {
  return (
    <div className="UserInput">
      <h2>UserInput</h2>
      <form>
        <label>
          Username:
          <input type="text" onChange={props.handler} value={props.current}/>
        </label>
      </form>
    </div>
  )
}

export default userInput
