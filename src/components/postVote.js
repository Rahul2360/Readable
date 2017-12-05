import React, {Component} from 'react';
import PropTypes from 'prop-types';

class votePost extends Component {
 	render() {
 		let {handleVote, postID} = this.props;
 		return (
 			<div>
 				<button onClick={() => handleVote(postID, 'upVote')}>up</button>
 				<button onClick={() => handleVote(postID, 'downVote')}>down</button>
 			</div>
 		)
 	}
 }

export default votePost;
