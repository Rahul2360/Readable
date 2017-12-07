import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {getCategories} from '../actions/categoryAction';
import {connect} from 'react-redux';

// This page going to the localhost:3000/categories and display the categories name
class Categories extends Component {
	componentDidMount() {
		this.props.getCategories();
	}
	render() {
		let {categories} = this.props;
		return (
			<div>
					{categories && categories.map((item,index) => {
						return (<li key={index}>
							<Link to={`/${item.name}`}>{item.name}</Link>
						</li>
						)
					})
				}
			</div>
		)
	}
}
// following function contains the state
function mapStateToProps({categories}) {
	return {
		categories:categories.categories
	}
}
// following function contains actions for ds=dispatch
function mapDispatchToProps(dispatch) {
	return {
		getCategories:() => dispatch(getCategories())
	}
}
// it conect the dispatch and state
export default connect(mapStateToProps,mapDispatchToProps)(Categories);
//export default Categories;
