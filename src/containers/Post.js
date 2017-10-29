import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {receivePostsID} from '../actions/postAction';
import {connect} from 'react-redux';
import  {postVote} from '../components/postVote';
import {receivePostsSuccess,votePost,deletePost} from '../actions/postAction';

class posts extends Component {
  componentDidMount() {
  let postID = this.props.match.params.id;
  this.props.receivePostsID(postID);
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
          <Link to={'/create/${postId.id}'}>Edit</Link>
          <postVote handle={votePost} postID={postId.id} />
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
    	receivePostsID: (postID) => dispatch(receivePostsID(postID)),
      votePost:(postID,vote) =>dispatch(votePost(postID,vote)),
      deletePost:(postID) => dispatch(deletePost(postID))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(posts)
