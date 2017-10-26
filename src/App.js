import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {withRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from './containers/Main';
import Categories from './containers/Categories';
import Create from './containers/Create';
import Post from './containers/Post';
import {getPosts} from './actions/postAction';
import {getCategories} from './actions/categoryAction';

// We have Four containers Main,Categories,Create,Post.
// two actions getPosts and getCategories
// Route is the conditionally shown component based on matching a path to a URL.

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route exact path="/" render={() => (<Main />)} />
          <Route exact path="/post/:id" render={() => (<Post/>)} />
          <Route exact path="/categories/:name" render={() => (<Categories />)} />
          <Route exact path="/create/:id" render={() => (<Create />)} />
        </div>
    );
  }
}

export default App;
