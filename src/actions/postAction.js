import * as API from '../api';
export const RECEIVE_POSTS='RECEIVE_POSTS';
export const RECEIVE_POSTS_ID='RECEIVE_POSTS_ID';
export const FILTER_POSTS='FILTER_POSTS';
export const CATEGORY_POSTS='CATEGORY_POSTS';
export const VOTE_UP ='VOTE_UP';
export const VOTE_DOWN ='VOTE_DOWN';

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

// This function is used for the filtering the posts.
export const filterPosts = (filter) => {
  return {
    type:FILTER_POSTS,
    filter
  }
}

// This function helps for finding the category posts i.e. a category contains may posts.
export const categoryPosts = posts => {
  return {
    type:CATEGORY_POSTS,
    posts
  }
}
export const categoryPostsSuccess = (category) => (dispatch) => {
  API.categoryPostsSuccess(category).then((data) => {
    dispatch(categoryPosts(data))
  })
}

// This function is used for the voting the particular post.
export const votepost = (id,vote) => dispatch => {
  API.votePost(id.vote).then((data) => {
    if(vote.option === 'voteup') {
      dispatch({
        type:VOTE_UP,
        id
      })
    }
    else {
      dispatch({
        type:VOTE_DOWN,
        id
      })
    }
  })
}
