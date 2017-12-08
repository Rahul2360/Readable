import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
	render() {
		return (
			<div>
				<p>Page is not found</p>
				<Link to='/'>Back To Homepage</Link> 
			</div>
		)
	}
}

export default NotFound;
