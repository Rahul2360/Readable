import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// This component helps us to edit our post
class EditPostForm extends Component {
	state = {
		title: '',
		body: ''
	}
// Receive props before updation
	componentWillReceiveProps(props) {
		this.setState({
			title: props.post.title,
			body: props.post.body
		});
	}
// change the title of the post
	changeTitle = (event) => {
		this.setState({
			title: event.target.value
		})
	}
// Change the body of the post
	changeBody = (event) => {
		this.setState({
			body: event.target.value
		})
	}
// submit the edited post
	handleSubmit = (event) => {
		event.preventDefault();

		let size = event.currentTarget.elements;
		let options = {};

		for (let i = 0; i < size.length; i++) {
			options[size[i].name] = size[i].value;
		}
window.location = '/';
		//this.props.editPostSuccess(this.props.post.id, options);
	}
// following code is displayed on the screen
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h3>Edit post</h3>
				<div>
					<label htmlFor="title">title</label>
					<input type="text" name="title" id="title" value={this.state.title} onChange={this.changeTitle} />
				</div>
				<div>
					<label htmlFor="body">body</label>
					<textarea name="body" id="body" value={this.state.body} onChange={this.changeBody}></textarea>
				</div>
				<button type="submit">add post</button>
			</form>
		)
	}
}

export default EditPostForm;
