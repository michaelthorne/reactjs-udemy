import React, { Component } from 'react'
import axios from 'axios'

import './FullPost.css'

class FullPost extends Component {
  state = {
    loadedPost: null
  }

  componentDidMount (prevProps, prevState, snapshot) {
    console.log(this.props.match.params.id)
    // Check if a valid (non null) has been passed
    if (this.props.match.params.id) {
      // Only get a post if none have been loaded or if the ID changes
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
        axios.get(`/posts/${this.props.match.params.id}`)
          .then(response => {
            this.setState({ loadedPost: response.data })
          })
      }
    }
  }

  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.match.params.id}`)
      .then(response => {
        console.log(response)
      })
  }

  render () {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>

    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading…</p>
    }

    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      )
    }
    return post
  }
}

export default FullPost