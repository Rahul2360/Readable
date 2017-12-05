import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Postform from '../components/Postform';
import EditPostForm from '../components/EditPostForm';
import {connect} from 'react-redux';
import {receivePostsIDSuccess,createPostSuccess,editPostSuccess} from '../actions/postAction'

class Create extends Component {
  componentDidMount() {
		if (this.props.match.params.id) {
			this.props.receivePostsIDSuccess(this.props.match.params.id);
		}
	}
 	render() {
    let {postId,createPostSuccess,editPostSuccess} = this.props;
    const matchs = this.props.match.params.id;
 		return (
 			<div>
 				{!matchs && <Postform  createPostSuccess={createPostSuccess}/>}
        {matchs && <EditPostForm post={postId} editPost={editPostSuccess}/>}
 			</div>
 		)
 	}
 }

const mapStateToProps = posts => {
  return {
    postId:posts.postId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    receivePostsIDSuccess: (postID) => dispatch(receivePostsIDSuccess(postID)),
    createPostSuccess:(options) => dispatch(createPostSuccess(options)),
    editPostSuccess:(postID,options) => dispatch(editPostSuccess(postID,options))
  }
}

 export default connect(mapStateToProps,mapDispatchToProps)(Create)
