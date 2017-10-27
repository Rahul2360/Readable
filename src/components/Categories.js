import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// This page going to the localhost:3000/categories and display the categories name
class Categories extends Component {
	render() {
		let {categories} = this.props;
		return (
			<div>
					{categories && categories.map((category) => {
						return (
							<ul>
							<Link to={'/category/${category.name}'}>{category.name}</Link>
						</ul>
						)
					})
				}
			</div>
		)
	}
}

export default Categories
