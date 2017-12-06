import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {createHashHistory} from 'history';
import { connect } from 'react-redux';
import PostVote from '../components/PostVote';
import {deletePostSuccess, votePostSuccess} from '../actions/postAction';

// In this commponent voting and deletion of the post os managed
/* deletePostSuccess handle the post deletion
while votePostSuccess action handle the voting of the post
*/

class Post extends Component {


	render() {
		const {post, votePostSuccess, deletePostSuccess} = this.props;

		return (
			<div>
				<Link to={`/post/${post.id}`}>{post.title}</Link>
				<div>Author: {post.author}</div>
				<div>Votes: {post.voteScore}</div>
				<div>Timestamp:{post.timestamp}</div>
				<Link to={`/create/${post.id}`}>Edit this post</Link>
				<button onClick={() => deletePostSuccess(post.id)}>Delete</button>
				<PostVote
					handleVote={votePostSuccess}
					postID={post.id} />
			</div>
		)
	}
}
// their is zero state
function mapStateToProps () {
  return {
  }
}
// action to be dispatched
const browserHistory = createHashHistory()
function mapDispatchToProps (dispatch) {
  return {
  	deletePostSuccess: (postID) => dispatch(deletePostSuccess(postID), browserHistory.push('/')),
  	votePostSuccess: (postID, option) => dispatch(votePostSuccess(postID, option))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)
