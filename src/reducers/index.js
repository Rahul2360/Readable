import {combineReducers} from 'redux';
import {RECEIVE_POSTS} from '../actions/postAction';
import {RECEIVE_CATEGORIES} from '../actions/categoryAction';

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
      default:
        return state
  }
}

export default combineReducers({posts,categories})
