import * as API from '../api';
export const RECEIVE_POSTS='RECEIVE_POSTS';

export const receivePosts = posts => {
  return  {
    type:RECEIVE_POSTS,
    posts
  }
}

export const receivePostsSuccess = () => (dispatch) => {
    API.receivePostsSuccess().then((data) =>{
        dispatch(receivePosts(data))
    })
}
