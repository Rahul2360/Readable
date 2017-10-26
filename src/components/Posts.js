import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Posts extends Component {
	render() {
		let {posts} = this.props;
		return (
			<div>
				{posts && posts.map((item) => {
					return (
						<div>
 						<Link to={`post/${item.id}`}>{item.title}</Link>
 					</div>)
				})}
		</div>
		)
	}
}

export default Posts;
