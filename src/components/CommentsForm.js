import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

 class CommentForm extends Component {

 	handleSubmit = (event) => {
 		event.preventDefault();

 		let elems = event.currentTarget.elements;
 		let options = {};

 		for (let i = 0; i < elems.length; i++) {
 			options[elems[i].name] = elems[i].value;
 		}

 		options.id = Math.floor(Math.random() * 1000000);
 		options.timestamp = new Date().getTime();
 		options.parentId = this.props.post.id;

 		this.props.addComment(options);
 	}

 	render() {
 		const {post, addComment} = this.props;

 		return (
 			<form onSubmit={this.handleSubmit}>
        		<input type="text" name="author" />
 				<textarea name="body"></textarea>
				<button type="submit">submit</button>
 			</form>
 		)
 	}
 }

 export default CommentForm; 
