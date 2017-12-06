import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

// this component hepls us to create new comments for a particular post
 class CommentForm extends Component {

 	handleSubmit = (event) => {
 		event.preventDefault();

 		let size = event.currentTarget.elements;
 		let options = {};

 		for (let i = 0; i < size.length; i++) {
 			options[size[i].name] = size[i].value;
 		}

 		options.id = Math.floor(Math.random() * 1000000);
 		options.timestamp = new Date().getTime();
 		options.parentId = this.props.post.id;

 		this.props.addCommentsSuccess(options,this.props.post.id);
    window.location = '/';
 	}
// result of following code is displayed in the screen
 	render() {
 		//const {post, addCommentsSuccess,comment} = this.props;

 		return (
 			<form onSubmit={this.handleSubmit}>
        <h3>Add new comment</h3>
 				<div>
 					<label htmlFor="author">author</label>
 					<input type="text" id="author" name="author" />
 				</div>
 				<div>
 					<label htmlFor="body">comment</label>
 					<textarea id="body" name="body"></textarea>
 				</div>
				<button type="submit">submit</button>
 			</form>
 		)
 	}
 }

 export default CommentForm;
