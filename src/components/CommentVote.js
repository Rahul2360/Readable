import React, {Component} from 'react';
 import PropTypes from 'prop-types';

 class CommentVote extends Component {
 	componentDidMount() {
 	}

 	render() {
 		let {handleVote, commentID,postID} = this.props;

 		return (
 			<div>
 				<button onClick={() => handleVote(commentID, 'upVote',postID)}>Up</button>
 				<button onClick={() => handleVote(commentID, 'downVote',postID)}>Down</button>
 			</div>
 		)
 	}
 }
 export default CommentVote;
