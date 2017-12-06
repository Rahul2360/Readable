import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import { voteCommentsSuccess } from '../actions/commentsActions';
import {connect} from 'react-redux';

 class CommentVote extends Component {
 	// upVote and downVote is picked up from the comments.js file at rreactnd-readable-starter-code
 	render() {
 		let {handleVote, commentID,postID} = this.props;

 		return (
 			<div>
 				<button onClick={() => this.props.vp(commentID, 'upVote',postID)}>Up</button>
 				<button onClick={() => this.props.vp(commentID, 'downVote',postID)}>Down</button>
 			</div>
 		)
 	}
 }
  const mapDispatchToProps = (dispatch) => {
    return {
      vp: (id,op,pid) => {
        dispatch(voteCommentsSuccess(id, op,pid))
      }
    }
  }

 export default connect(null,mapDispatchToProps)(CommentVote);
