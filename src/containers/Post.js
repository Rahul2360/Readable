import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import  PostVote from '../components/postVote';
import {receivePostsIDSuccess,votePost,deletePost} from '../actions/postAction';
import {getCommentsSuccess,filterComments,voteCommentsSuccess,addCommentsSuccess} from '../actions/commentsActions';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentsForm';

class posts extends Component {
  componentDidMount() {
  let postID = this.props.match.params.id;
  this.props.receivePostsIDSuccess(postID);
  this.props.getCommentsSuccess(postID);
}
   render() {
     let {postId,votepost,deletePost} = this.props;
     let {commentsId,filter,filterComments,voteCommentsSuccess,addCommentsSuccess} = this.props;
  	return (
 			<div>
        {postId && <div>
				<h1>{postId.title}</h1>
 					<p>{postId.body}</p>
          <p>{postId.author}</p>
          <p>{postId.voteScore}</p>
          <Link to={`/create/${postId.id}`}>Edit</Link><br></br>
          <PostVote handle={votePost} postID={postId.id} />
          <button onClick={() => deletePost(postId.id)}>Delete</button>
 				</div>}
        {commentsId && <Comments
          handleVote={voteCommentsSuccess} filter={filter} filterComments={filterComments} comments={commentsId} />}
          {postId && <CommentForm post={postId} addComment={addCommentsSuccess} />}
 			</div>
 		)
 	}
 }

 function mapStateToProps ({posts,comments}) {
    return {
    	postId:posts.postId,
      commentsId: comments.commentsId,
   	  filter: comments.filter
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
    	receivePostsIDSuccess: (postID) => dispatch(receivePostsIDSuccess(postID)),
      votePost:(postID,vote) =>dispatch(votePost(postID,vote)),
      deletePost:(postID) => dispatch(deletePost(postID)),
      getCommentsSuccess:(postID) => dispatch(getCommentsSuccess(postID)),
      filterComments:(filter) => dispatch(filterComments(filter)),
      addCommentsSuccess:(option) =>dispatch(addCommentsSuccess(option)),
      voteCommentsSuccess:(commentID,options) => dispatch(voteCommentsSuccess(commentID,options))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(posts)
