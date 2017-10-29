import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import  PostVote from '../components/postVote';
import {receivePostsIDSuccess,votePost,deletePost} from '../actions/postAction';

class posts extends Component {
  componentDidMount() {
  let postID = this.props.match.params.id;
  this.props.receivePostsIDSuccess(postID);
}
   render() {
     let {postId,votepost,deletePost} = this.props;
  	return (
 			<div>
        {postId && <div>
				<h1>{postId.title}</h1>
 					<p>{postId.body}</p>
          <p>{postId.author}</p>
          <p>{postId.voteScore}</p>
          <Link to={'/create/${postId.id}'}>Edit</Link><br></br>
          <PostVote handle={votePost} postID={postId.id} />
          <button onClick={() => deletePost(postId.id)}>Delete</button>
 				</div>}
 			</div>
 		)
 	}
 }

 function mapStateToProps ({posts}) {
    return {
    	postId:posts.postId,
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
    	receivePostsIDSuccess: (postID) => dispatch(receivePostsIDSuccess(postID)),
      votePost:(postID,vote) =>dispatch(votePost(postID,vote)),
      deletePost:(postID) => dispatch(deletePost(postID))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(posts)
