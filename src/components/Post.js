import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PostVote from '../components/postVote';

import {deletePostSuccess, votePostSuccess} from '../actions/postAction';

class Post extends Component {
	componentDidMount() {
	}

	render() {
		const {post, votePost, deletePost} = this.props;

		return (
			<div>
				<Link to={`/post/${post.id}`}>{post.title}</Link>
				<div>author: {post.author}</div>
				<div>comments: {post.comments}</div>
				<div>votes: {post.voteScore}</div>
				<Link to={`/create/${post.id}`}>Edit</Link>
				<PostVote
					handleVote={votePost}
					postID={post.id} />
				<button onClick={() => deletePostSuccess(post.id)}>Delete</button>
			</div>
		)
	}
}

function mapStateToProps () {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
  	deletePostSuccess: (postID) => dispatch(deletePostSuccess(postID)),
  	votePostSuccess: (postID, option) => dispatch(votePostSuccess(postID, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
