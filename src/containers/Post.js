import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import  PostVote from '../components/PostVote';
import {receivePostsIDSuccess,votePostSuccess,deletePostSuccess} from '../actions/postAction';
import {getCommentsSuccess,filterComments,voteCommentsSuccess,addCommentsSuccess} from '../actions/commentsActions';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentsForm';
import {editComments,deleteCommentsSuccess,updateCommentsSuccess} from '../actions/commentsActions';

class posts extends Component {
  // in this we are creating four states because we want to chanse the post i.e.edit the posts
  state ={
    author:'',
    body:'',
    editBody:false,
    editAuthor:false
  }
  // this will mount the components
  componentDidMount() {
  let postID = this.props.match.params.id;
  this.props.receivePostsIDSuccess(postID);
  this.props.getCommentsSuccess(postID);
}
// change the body
changeBody = (event) => {
  this.setState({
    body:event.target.value,
    editBody:true
  })
}
// change Author
changeAuthor = (event) => {
  this.setState({
    author:event.target.value,
    editAuthor:true
  })
}
   render() {
     let {postId,votePostSuccess,deletePostSuccess} = this.props;
     let {commentsId,filter,filterComments,voteCommentsSuccess,addCommentsSuccess} = this.props;
     let {commentId,editComments,deleteCommentsSuccess,updateCommentsSuccess,edit} = this.props;
  	return (
 			<div>
        {postId && <div>
				<h1>{postId.title}</h1>
 					<p>body: {postId.body}</p>
          <p>author:{postId.author}</p>
          <p>votes: {postId.voteScore}</p>
          <p>comments:{postId.comments}</p>
          <div>
          <Link to={`/create/${postId.id}`}>Edit</Link><br></br>
          <button onClick={() => deletePostSuccess(postId.id)}>Delete</button>
        </div>
          <PostVote handleVote={votePostSuccess} postID={postId.id} />
 				</div>}
        {postId && commentsId && <Comments
          handleVote={voteCommentsSuccess} postID={postId.id} filter={filter} filterComments={filterComments} comments={commentsId} handleEdit={editComments} handleDelete={deleteCommentsSuccess} edit={edit} commentId={commentId} handleUpdate={updateCommentsSuccess}/>}
          {postId && <CommentForm post={postId} addCommentsSuccess={addCommentsSuccess} />}
 			</div>
 		)
 	}
 }

 function mapStateToProps ({posts,comments}) {
    return {
    	postId:posts.postId,
      commentsId: comments.commentsId,
   	  filter: comments.filter,
      commentId:comments.commentId,
      edit:comments.edit
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
    	receivePostsIDSuccess: (postID) => dispatch(receivePostsIDSuccess(postID)),
      votePostSuccess:(postID,option) =>dispatch(votePostSuccess(postID,option)),
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
