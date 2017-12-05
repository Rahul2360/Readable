import {combineReducers} from 'redux';
import {RECEIVE_POSTS,RECEIVE_POSTS_ID,CATEGORY_POSTS,FILTER_POSTS} from '../actions/postAction';
import {RECEIVE_CATEGORIES} from '../actions/categoryAction';
import {GET_COMMENTS,FILTER_COMMENTS,EDIT_COMMENTS,UPDATE_COMMENTS} from '../actions/commentsActions';

// Following are the reducers of category section
// We have to update only our categories which is taken from the user
function categories (state={},action){
  switch(action.type) {
    case RECEIVE_CATEGORIES :
      return {
        ...state,
        categories:action.categories,
      }
      default:
        return state
  }
}

// Following are the reducers of posts section
/* we have to update the post with their corresponding unique id and their corresponding category
and when we aplly sorting method on the posts
*/
function posts (state={},action){
  switch(action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        posts:action.posts,
      }
      case RECEIVE_POSTS_ID:
      return {
        ...state,
        postId:action.post,
      }
      case CATEGORY_POSTS:
      return {
        ...state,
        posts:action.posts,
      }
      case FILTER_POSTS:
      return {
        ...state,
        filter:action.filter,
      }
      default:
        return state
  }
}

// Following are the reducers of comments section
/* We have to update our comments that is input by the user,edit our comments, filter the comments and
updation of comments*/
function comments (state={},action){
  switch(action.type) {
    case GET_COMMENTS :
      return {
        ...state,
        commentsId:action.comments,
      }
      case FILTER_COMMENTS:
      return {
        ...state,
        filter:action.filter,
      }
      case  EDIT_COMMENTS:
      return {
        ...state,
        commentId:action.comment,
        edit:true
      }
      case UPDATE_COMMENTS:
      return {
        ...state,
        edit:false
      }
      default:
        return state
  }
}

export default combineReducers({posts,categories,comments})
