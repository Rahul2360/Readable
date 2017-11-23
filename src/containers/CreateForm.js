import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Postform from '../components/Postform';
import {connect} from 'react-redux';
import {receivePostsID,createPostSuccess} from '../actions/postAction'

class create extends Component {
 	render() {
    let {postId,createPostSuccess} = this.props;
    const matchs = this.props.match.params.id;
 		return (
 			<div>
 				<Postform  createPostSuccess={createPostSuccess}/>
        Hello world
 			</div>
 		)
 	}
 }

const mapStateToProps = post => {
  return {
    postId:post.postId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    receivePostsID: (postID) => dispatch(receivePostsID(postID)),
    createPostSuccess:(options) => dispatch(createPostSuccess(options))
  }
}

 export default connect(mapStateToProps,mapDispatchToProps)(create)
