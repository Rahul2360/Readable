import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import {getCategories} from '../actions/categoryAction';
import {receivePostsSuccess,filterPosts} from '../actions/postAction';

import Categories from '../components/Categories';
import Posts from '../components/Posts';

// Link is your replacement for anchor tags.
// This will display the post and categories from the API without clicking
class Main extends Component {
  componentDidMount() {
    this.props.receivePostsSuccess();
    //this.props.getCategories();
  }
  render() {
    let {categories,posts,filterPosts,filter} = this.props;
    return (
      <div>
        <h1>Categories</h1>
        <Categories categories={categories} />
        <br></br>
        <h1>Posts</h1>
        <Posts filterPosts={filterPosts} filter={filter}  posts={posts} />
        <Link to="/create">Add New Post</Link>
      </div>
    )
  }
}

// We are using connect() function beacause it can get both state and dispatch for the Component from the redux store.
// For connect() the syntax is connect(mapStateToProps, mapDispatchToProps)(MyComponent)

// mapStateToProps() allows you to specify which data from the store you want passed to your React component.
// It takes in the store's state, an optional ownprops argument, and returns an object.
 function mapStateToProps ({categories, posts}) {
   return {
   	//categories: categories.categories,
   	posts: posts.posts,
    filter:posts.filter
   }
 }

// mapDispatchToProps()  this will help to reduces our code little bit . we can bind
 function mapDispatchToProps (dispatch) {
   return {
   	//getCategories: () => dispatch(getCategories()),
   receivePostsSuccess: () => dispatch(receivePostsSuccess()),
   filterPosts: (filter) => dispatch(filterPosts(filter))
   }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(Main)
