import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

// This component helps us to edit a particular comment
 class EditComment extends Component {
 	state = {}
  // this will mount the author and the comments bosy
 	componentDidMount() {
 		this.setState({
 			author: this.props.comment.author,
 			body: this.props.comment.body
 		})
 	}
// if the user entered a new comment then following function is called so that it can chnage its body
 	changeBody = (event) => {
 		this.setState({
 			body: event.target.value
 		})
 	}
// this function is executed when we click on the submit button
 	handleSubmit = (event) => {
 		event.preventDefault();

  		this.props.handleUpdate(this.props.comment.id, {
  			timestamp: new Date().getTime(),
  			body: this.state.body
		}, this.props.postID);
  	}
// result of following code is displayed on the screen
  	render() {
 		//const {comment} = this.props;

 		return (
 			<form onSubmit={this.handleSubmit}>
 				<input name="author" type="text" value={this.state.author} />
 				<textarea name="body" value={this.state.body} onChange={this.changeBody}></textarea>
 				<button type="submit">submit</button>
 			</form>
 		)
 	}
 }

 export default EditComment;
