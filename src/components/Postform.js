import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

class Postform extends Component {
  componentDidMount(){}
  handleSubmit = (event) => {
 		event.preventDefault();
    // total size of posts
 		let size = event.currentTarget.elements;
 		let options = {};

 		for (let i = 0; i < size.length; i++) {
 			options[size[i].name] = size[i].value;
 		}
    // this will get a random id and their time of creation
 		options.id = Math.floor(Math.random() * 100000);
 		options.timestamp = new Date().getTime();

 		this.props.createPostSuccess(options);
    window.location = '/';
 	}
 	render() {
// Following is the form that display on the screen
 		return (
         <form onSubmit={this.handleSubmit}>
				<h3>Create new post</h3>
				<div>
					<label htmlFor="title">title</label>
					<input type="text" name="title" id="title" required />
				</div>
				<div>
					<label htmlFor="body">body</label>
					<textarea name="body" id="body" required></textarea>
				</div>
				<div>
				<label htmlFor="category">category</label>
					<input type="text" name="category" id="category" required/>
				</div>
				<div>
					<label htmlFor="author">author</label>
					<input type="text" name="author" id="author" required/>
				</div>
				<button type="submit">add post</button>
 			</form>
 		)
 	}
 }

 export default Postform;
