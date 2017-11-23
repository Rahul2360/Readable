import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {categoryPosts,filterPosts} from '../actions/postAction';
import {getCategories} from '../actions/categoryAction';
import Posts from '../components/Posts';
import Categories from '../components/Categories';

class Category extends Component {
  componentDidMount() {
    let category = this.props.match.params.name;
    this.props.categoryPosts(category);
    //this.props.getCategories();
  }
  componentWillUpdate(nextProps) {
		if (nextProps.match.params.name !== this.props.match.params.name) {
			let category = nextProps.match.params.name;
			this.props.categoryPosts(category);
			//this.props.getCategories();
		}
	}
  render() {
    let {posts,categories,filter,filterPosts} = this.props;
    return (
      <div>

        <Posts posts={posts} filter={filter} filterPosts={filterPosts}> </Posts>
        <Link to="/create">Add Post</Link>
        Hello world
      </div>
    )
  }
}

const mapStateToProps = (categories,posts) => {
  return {
    posts:posts.posts,
    //categories:categories.categories,
    filter:posts.filter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
   	//getCategories: () => dispatch(getCategories()),
  	categoryPosts: (category) => dispatch(categoryPosts(category)),
   	filterPosts: (filter) => dispatch(filterPosts(filter))

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category)
