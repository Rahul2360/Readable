import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Posts extends Component {
	render() {
		let {posts,filter,filterPosts} = this.props;
		let sortPostAsc,sortPostDesc;
 // Sorting the posts in the ascending order
		if (posts) {
			sortPostAsc = posts.sort((a,b) => {
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
			<select value={filter} onChange={(event) => {filterPosts(event.target.value)}}>
				<option value="voteScore">VoteScore</option>
				<option value="timestamp">Timestamp</option>
				<option value="Body">Body</option>
				<option value="Author">Author</option>
			</select>
			<h2>Ascending Order</h2>
			<ul>
				{sortPostAsc && sortPostAsc.map((post) => {
					return (<div>
						<p>Timestamp: {post.timestamp}</p>
						<p>Votes: {post.voteScore}</p>
						<p>Body: {post.body}</p>
						<p>Author: {post.author}</p>
						<Link to={`/post/${post.id}`}>{post.title}</Link>
						<hr></hr>
					</div>)
				})}
			</ul>
		</div>
		)
	}
}

export default Posts;
