import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CommentVote from './CommentVote';
import EditComments from './EditComments'

class Comments extends Component {
  render() {
  	let {currentComment,comments, filter, filterComments,handleVote,handleEdit,handleDelete,handleUpdate,postID,isEditing} = this.props;
 		let sortedComments;

 		if (comments) {
 			sortedComments = comments.sort((a,b) => {
 				if (a[filter] > b[filter]) {
 					return -1;
 				}

 				if (a[filter] < b[filter]) {
 					return 1;
 				}

 				return 0;
 			});
 		}

 		return (
 			<div>
 				<h1>comments</h1>
 				<select value={filter} onChange={(event) => {filterComments(event.target.value)}}>
 					<option value="voteScore">voteScore</option>
 					<option value="timestamp">timestamp</option>
 				</select>
 				<ul>
 					{comments && comments.map((item) => {
 						return (<div>
 							{item.body} by {item.author}
 							votes: {item.voteScore}
 							time: {item.timestamp}
              <CommentVote commentID={item.id} handleVote={handleVote} postID={postID} />
              <button onClick={() => handleEdit(item,postID)}>edit</button>
  						<button onClick={() => handleDelete(item.id,postID)}>delete</button>
              {(currentComment && isEditing) && item.id === currentComment.id && <EditComments
  								handleUpdate={handleUpdate}
								  comment={item}
								  postID={postID} />}
 						</div>)
 					})}
 				</ul>
 			</div>
 		)
 	}
 }
export default Comments;
