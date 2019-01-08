import React, { Component } from 'react'
import './App.css'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Michael'
  }

  usernameHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  }

  render () {
    return (
      <div className="App">
        <h1>Assignment 1</h1>

        <UserInput
          handler={this.usernameHandler}
          current={this.state.username}/>

        <UserOutput
          username={this.state.username}/>
        <UserOutput
          username={this.state.username}/>
        <UserOutput
          username="Static robot"/>
      </div>
    )
  }
}

export default App
