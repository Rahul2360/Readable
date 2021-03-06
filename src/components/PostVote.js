import React, {Component} from 'react'
import { votePostSuccess } from '../actions/postAction';
import {connect} from 'react-redux';
//import PropTypes from 'prop-types';

// upVote and downVote is picked up from the vote.js file at rreactnd-readable-starter-code
class votePost extends Component {
 	render() {
 		let {handleVote, postID} = this.props;
 		return (
 			<div>
 				<button onClick={() => this.props.vp(postID, "upVote")}>up</button>
 				<button onClick={() => this.props.vp(postID, 'downVote')}>down</button>
 			</div>
 		)
 	}
 }

 const mapDispatchToProps = (dispatch) => {
   return {
     vp: (id,op) => {
       dispatch(votePostSuccess(id, op))
     }
   }
 }

export default connect(null,mapDispatchToProps)(votePost);
