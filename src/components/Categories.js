import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// This page going to the localhost:3000/categories and display the categories name
class Categories extends Component {
	componentDidMount() {}
	render() {
		let {categories} = this.props;
		return (
			<div>
					{categories && categories.map((category) => {
						return (

							<Link to={'/category/${category.name}'}>{category.name}</Link>

						)
					})
				}
				<br></br>
			</div>
		)
	}
}

export default Categories
