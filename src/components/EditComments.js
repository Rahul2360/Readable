import React, {Component} from 'react';
 import PropTypes from 'prop-types';
 import { Link } from 'react-router-dom';

 class EditComment extends Component {
 	state = {}

 	componentDidMount() {
 		this.setState({
 			author: this.props.comment.author,
 			body: this.props.comment.body
 		})
 	}

 	changeBody = (event) => {
 		this.setState({
 			body: event.target.value
 		})
 	}

 	handleSubmit = (event) => {
 		event.preventDefault();

  		this.props.handleUpdate(this.props.comment.id, {
  			timestamp: new Date().getTime(),
  			body: this.state.body
		}, this.props.postID);
  	}

  	render() {
 		const {comment} = this.props;

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