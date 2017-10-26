import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Posts extends Component {
	render() {
		let {posts} = this.props;
		return (
			<div>
				{posts && posts.map((post) => {
					return (<div>{post.title}</div>)
				})}
		</div>
		)
	}
}

export default Posts;
