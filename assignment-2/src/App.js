import React, { Component } from 'react'
import './App.css'
import Validation from './Validation/Validation'

class App extends Component {
  state = {
    length: 0
  }

  checkInputLength = (event) => {
    this.setState(
      {
        length: event.target.value.length
      }
    )
  }

  render () {
    return (
      <div className="App">
        <h1>Assignment: 2</h1>

        <input type="text" onChange={this.checkInputLength}/>

        <Validation
          length={this.state.length}/>
      </div>
    )
  }
}

export default App
