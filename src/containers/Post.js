import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {receivePostsID} from '../actions/postAction';
import {connect} from 'react-redux';
import  {votePost} from '../components/votePost';
import {receivePostsSuccess,votepost} from '../actions/postAction';

class posts extends Component {
  componentDidMount() {
  let postID = this.props.match.params.id;
  this.props.receivePostsID(postID);
}
   render() {
     let {postId,votepost} = this.props;
  	return (
 			<div>
        {postId && <div>
				<h1>{postId.title}</h1>
 					<p>{postId.body}</p>
          <p>{postId.author}</p>
          <p>{postId.voteScore}</p>
          <Link to={'/create/${postId.id}'}>Edit</Link>
          <votePost handle={votepost} postID={postId.id} />
 				</div>}

 			</div>
 		)
 	}
 }

 function mapStateToProps ({posts}) {
    return {
    	postId:posts.postId,
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
    	receivePostsID: (postID) => dispatch(receivePostsID(postID)),
      votepost:(postID,vote) =>dispatch(votepost(postID,vote))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(posts)
