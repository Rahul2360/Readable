import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class posts extends Component {
   render() {
  	return (
 			<div>
 				<Link to="/create/1">Edit</Link>
 			</div>
 		)
 	}
 }

 export default posts;
