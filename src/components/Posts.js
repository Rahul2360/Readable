import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import Post from '../components/Post';

class Posts extends Component {
	render() {
		let {posts,filter,filterPosts} = this.props;
		let sortPostAsc;
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
		// code is displayed on the screen
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
				{sortPostAsc && sortPostAsc.filter(item => !item.deleted).map((item,index) => {
 					return (<Post key={index} post={item} />)
				})}
			</ul>
		</div>
		)
	}
}

export default Posts;
