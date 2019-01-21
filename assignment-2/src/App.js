import React, { Component } from 'react'
import './App.css'
import Char from './Char/Char'
import Validation from './Validation/Validation'

class App extends Component {
  state = {
    userInput: ''
  }

  deleteCharHandler = (index) => {
    // Get the user's input as an array
    const text = this.state.userInput.split('')

    // Remove the character at the selected index
    text.splice(index, 1)

    // Convert the array of characters back into a string
    const updatedText = text.join('')

    // Update the user input to the updated text
    this.setState(
      {
        userInput: updatedText
      }
    )
  }

  inputChangeHandler = (event) => {
    this.setState(
      {
        userInput: event.target.value
      }
    )
  }

  render () {
    // Convert the user input into an array and render the char component for each character
    const charList = this.state.userInput.split('').map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}/>
      )
    })

    return (
      <div className="App">
        <h1>Assignment: 2</h1>

        <input type="text" onChange={this.inputChangeHandler}/>

        <Validation
          length={this.state.userInput.length}/>

        {charList}
      </div>
    )
  }
}

export default App
