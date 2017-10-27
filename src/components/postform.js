import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class postform extends Component {

 	render() { 

 		return (
 			<form>
        <input type="text" value={this.props ? this.props.title : ''} />
 				<textarea value={this.props ? this.props.body : ''}></textarea>
        <div>RB</div>
 			</form>
 		)
 	}
 }

 export default postform;
