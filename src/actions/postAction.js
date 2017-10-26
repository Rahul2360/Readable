import * as API from '../api';
export const RECEIVE_POSTS='RECEIVE_POSTS';
export const RECEIVE_POSTS_ID='RECEIVE_POSTS_ID';

// It will get the posts from the server and display on the screen.
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

// In this we can go to the specfic post i.e. we can click on any post so that we can change or edit the post.
export const receivePostsID = posts => {
  return {
    type:RECEIVE_POSTS_ID,
    posts
  }
}

export const receivePostsIDSuccess = (id,posts) => (dispatch) => {
  API.receivePostsIDSuccess(id,posts).then((data) => {
    dispatch(receivePostsID(data))
  })
}
