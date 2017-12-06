import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import CommentVote from './CommentVote';
import EditComments from './EditComments'
//import {voteCommentsSuccess} from '../actions/commentsActions'

// iN this comments are displayed and sorted you can perform different function on comments like editing, deleting, voting
class Comments extends Component {
  render() {
  	let {commentId,comments, filter, filterComments,handleVote,handleEdit,handleDelete,handleUpdate,postID,edit} = this.props;
 		let sortCommentsAsc;
    // following code helps us to sort the comments in a particular way
 		if (comments) {
 			sortCommentsAsc = comments.sort((a,b) => {
 				if (a[filter] > b[filter]) {
 					return -1;
 				}
 				if (a[filter] < b[filter]) {
 					return 1;
 				}
 				return 0;
 			});
 		}
// this is displayed on our webpages
 		return (
 			<div>
        <p>Comments:{comments.length}</p>
 				<h1>comments</h1>
 				<select value={filter} onChange={(event) => {filterComments(event.target.value)}}>
          <option value="timestamp">timestamp</option>
          <option value="voteScore">voteScore</option>
 				</select>
 				<ul>
 					{sortCommentsAsc && sortCommentsAsc.map((item,index) => {
 						return (<div key={index}>
 							{item.body} by {item.author}<br></br>
 							votes: {item.voteScore}<br></br>
 							time: {item.timestamp}
              <CommentVote  handleVote={handleVote} postID={postID} commentID={item.id}/>
              <button onClick={() => handleEdit(item,postID)}>Edit</button>
  						<button onClick={() => handleDelete(item.id,postID)}>Delete</button>
              {(commentId && edit) && item.id === commentId.id &&
                <EditComments handleUpdate={handleUpdate} comment={item} postID={postID} />}
 						</div>)
 					})}
 				</ul>
 			</div>
 		)
 	}
 }
export default Comments;
