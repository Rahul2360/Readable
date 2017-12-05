import React, {Component} from 'react';

class EditPostForm extends Component {
	state = {
		title: '',
		body: ''
	}

	componentWillReceiveProps(props) {
		this.setState({
			title: props.post.title,
			body: props.post.body
		});
	}

	changeTitle = (event) => {
		this.setState({
			title: event.target.value
		})
	}

	changeBody = (event) => {
		this.setState({
			body: event.target.value
		})
	}

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
