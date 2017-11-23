import {combineReducers} from 'redux';
import {RECEIVE_POSTS,RECEIVE_POSTS_ID,CATEGORY_POSTS,FILTER_POSTS} from '../actions/postAction';
import {RECEIVE_CATEGORIES} from '../actions/categoryAction';
import {GET_COMMENTS,FILTER_COMMENTS} from '../actions/commentsActions';

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
      default:
        return state
  }
}

export default combineReducers({posts,categories,comments})
