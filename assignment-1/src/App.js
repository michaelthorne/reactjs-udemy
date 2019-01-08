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
    const style = {
      'border': '1px solid #ccc',
      'borderRadius': '4px',
      'margin': '8px auto',
      'maxWidth': '240px',
      'padding': '2px'
    }

    return (
      <div className="App">
        <h1>Assignment 1</h1>

        <UserInput
          handler={this.usernameHandler}
          current={this.state.username}/>

        <UserOutput
          username={this.state.username}
          style={style}/>
        <UserOutput
          username={this.state.username}
          style={style}/>
        <UserOutput
          username="Static robot"
          style={style}/>
      </div>
    )
  }
}

export default App
