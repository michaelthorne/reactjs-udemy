import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Posts from '../../containers/Blog/Posts/Posts'
import FullPost from '../../containers/Blog/FullPost/FullPost'
import NewPost from '../../containers/Blog/NewPost/NewPost'
import './Blog.css'

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                to="/"
                exact
                activeClassName="active"
                activeStyle={{
                  color: 'red',
                  textDecoration: 'underline'
                }}
              >Home</NavLink></li>
              <li><NavLink
                to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    )
  }
}

export default Blog