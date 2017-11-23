import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import  PostVote from '../components/postVote';
import {receivePostsIDSuccess,votePostSuccess,deletePostSuccess} from '../actions/postAction';
import {getCommentsSuccess,filterComments,voteCommentsSuccess,addCommentsSuccess} from '../actions/commentsActions';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentsForm';
import {editComments,deleteCommentsSuccess,updateCommentsSuccess} from '../actions/commentsActions';

class posts extends Component {
  componentDidMount() {
  let postID = this.props.match.params.id;
  this.props.receivePostsIDSuccess(postID);
  this.props.getCommentsSuccess(postID);
}
   render() {
     let {postId,votepost,deletePost} = this.props;
     let {commentsId,filter,filterComments,voteCommentsSuccess,addCommentsSuccess} = this.props;
     let {currentComment,editComments,deleteCommentsSuccess} = this.props;
  	return (
 			<div>
        {postId && <div>
				<h1>{postId.title}</h1>
 					<p>body: {postId.body}</p>
          <p>author:{postId.author}</p>
          <p>votes: {postId.voteScore}</p>
          <p>comments:{postId.comments}</p>
          <Link to={`/create/${postId.id}`}>Edit</Link><br></br>
          <PostVote handle={votePostSuccess} postID={postId.id} />
          <button onClick={() => deletePostSuccess(postId.id)}>Delete</button>
 				</div>}
        {postId && commentsId && <Comments
          handleVote={voteCommentsSuccess} filter={filter} filterComments={filterComments} comments={commentsId} handleEdit={editComments} handleDelete={deleteCommentsSuccess} />}
          {postId && <CommentForm post={postId} addComment={addCommentsSuccess} comment={currentComment} />}
 			</div>
 		)
 	}
 }

 function mapStateToProps ({posts,comments}) {
    return {
    	postId:posts.postId,
      commentsId: comments.commentsId,
   	  filter: comments.filter,
      currentComment:comments.currentComment
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
    	receivePostsIDSuccess: (postID) => dispatch(receivePostsIDSuccess(postID)),
      votePostSuccess:(postID,vote) =>dispatch(votePostSuccess(postID,vote)),
      deletePostSuccess:(postID) => dispatch(deletePostSuccess(postID)),
      getCommentsSuccess:(postID) => dispatch(getCommentsSuccess(postID)),
      filterComments:(filter) => dispatch(filterComments(filter)),
      addCommentsSuccess:(option,postID) =>dispatch(addCommentsSuccess(option)),
      voteCommentsSuccess:(commentID,options,postID) => dispatch(voteCommentsSuccess(commentID,options)),
      editComments:(comment,postID) => dispatch(editComments(comment)),
      deleteCommentsSuccess:(commentID,postID) => dispatch(deleteCommentsSuccess(commentID)),
      updateCommentsSuccess:(commentID,options,postID) => dispatch(updateCommentsSuccess(commentID,options,postID))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(posts)
