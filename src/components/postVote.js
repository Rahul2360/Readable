import React, {Component} from 'react';
import PropTypes from 'prop-types';

class votePost extends Component {
 	render() {
 		let {handle, postID} = this.props;
 		return (
 			<div>
 				<button onClick={() => handle(postID, 'voteup')}>up</button>
 				<button onClick={() => handle(postID, 'votedown')}>down</button>
 			</div>
 		)
 	}
 }

export default votePost;
