import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {getPosts,categoryPosts} from '../actions/postAction';
import {getCategories} from '../actions/categoryAction';
import Post from '../components/Posts';

class categories extends Component {
  componentDidMount() {
    let category = this.props.match.params.name;
    this.props.categoryPosts(category);
  }
  render() {
    let {post} = this.props;
    return (
      <div>
        <Post post={post}> </Post>
        Hello world
      </div>
    )
  }
}

const mapStateToProps = (posts) => {
  return {
    post:posts.post,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    categoryPosts : (category) => dispatch(categoryPosts(category))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(categories)
