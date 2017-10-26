import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Categories extends Component {
	render() {
		let {categories} = this.props;
		return (
			<div>
					{categories && categories.map((category) => {
						return (<div>{category.name}</div>)
					})}
			</div>
		)
	}
}

export default Categories;
