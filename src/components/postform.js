import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class postform extends Component {
  componentDidMount(){}
 	render() {
    const {posts} = this.props;
 		return (
 			<form>
        <input type="text" value={posts ? posts.title : ''} />
 				<textarea value={posts ? posts.body : ''}></textarea>
 			</form>
 		)
 	}
 }

 export default postform;
