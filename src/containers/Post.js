import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {receivePostsID} from '../actions/postAction';
import {connect} from 'react-redux';

class posts extends Component {
  componentDidMount() {
  let postID = this.props.match.params.id;
  this.props.receivePostsID(postID);
}
   render() {
  	return (
 			<div>
        {this.props.postId && <div>
				<h1>{this.props.postId.title}</h1>
 					<p>{this.props.postId.body}</p>
 				</div>}
 				<Link to="/create/1">Edit</Link>
 			</div>
 		)
 	}
 }

 function mapStateToProps ({posts}) {
    return {
    	postId: posts.postId
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
    	receivePostsID: (postID) => dispatch(receivePostsID(postID))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(posts)
