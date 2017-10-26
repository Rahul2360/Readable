import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class postform extends Component {

 	render() {
 		const {title} = this.props;

 		return (
 			<form>
 				<input type="text" value={title} />
 			</form>
 		)
 	}
 }

 export default postform;
