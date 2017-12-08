import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route,Switch} from 'react-router-dom';
//import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Main from './containers/Main';
import Category from './containers/Category';
import CreateForm from './containers/CreateForm';
import Post from './containers/Post';
import NotFound from './components/NotFound';

// We have Four containers Main,Categories,Create,Post.
// We have five paths that we are going in this project i.e. main or homepage,post,categories,newpost,newpost with id
// Route is the conditionally shown component based on matching a path to a URL.

class App extends Component {
  render() {
    return (
        <div className="App">
          <Link to={`/`}>home</Link><br></br>
          <Link to={`/`}>Category and Post</Link>
          <Route exact path="/" render={() => (<Main />)} />
          <Route exact path="/:name/:id" component={Post} />
          <Route exact path="/:name" component={Category} />
          <Route exact path="/create/:id" component={CreateForm} />
          <Route exact path="/create" component={CreateForm} />
          <Route component={NotFound} />
        </div>
    );
  }
}

export default App;
