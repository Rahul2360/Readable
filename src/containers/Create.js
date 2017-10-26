import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import postform from '../components/postform';

class create extends Component {
 	render() {
 		return (
 			<div>
 				<postform
 					title="first post" />
 			</div>
 		)
 	}
 }

 export default create;
