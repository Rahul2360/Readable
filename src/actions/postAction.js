import * as API from '../api';
export const RECEIVE_POSTS='RECEIVE_POSTS';
export const RECEIVE_POSTS_ID='RECEIVE_POSTS_ID';
export const FILTER_POSTS='FILTER_POSTS';
export const CATEGORY_POSTS='CATEGORY_POSTS';
export const VOTE_POST ='VOTE_POST';
export const DELETE_POST ='DELETE_POST';
export const GET_COMMENTS ='GET_COMMENTS';
export const CREATE_POST = 'CREATE_POST';
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
export const receivePostsID = post => {
  return {
    type:RECEIVE_POSTS_ID,
    post
  }
}
export const receivePostsIDSuccess = (id) => (dispatch) => {
  API.receivePostsIDSuccess(id).then((data) => {
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
export const votePost = (post) => {
   return {
     type: VOTE_POST,
     post
   }
 }
 export const votePostSuccess = (postID, vote) => (dispatch) => {
 	API.votePostSuccess(postID,vote).then((data) => {
    dispatch(votePost(data))
    dispatch(receivePostsSuccess())
    dispatch(receivePostsIDSuccess(postID))
  })
}

export const deletePost = post => {
return {
  type:DELETE_POST,
  post
}
}
export const deletePostSuccess = (postID) =>(dispatch) => {
  API.deletePostSuccess(postID).then((data) => {
    dispatch(deletePost(data))
    dispatch(receivePostsSuccess())
  })
}


export const getComments = comments => {
  return {
    type:GET_COMMENTS,
    comments
  }
}
export const getCommentsSuccess = postID => dispatch => {
  API.getCommentsSuccess(postID).then(data => {
    dispatch(getComments(data))
  })
}

export const createPost = post => {
  return {
    type:CREATE_POST,
    post
  }
}

export const createPostSuccess = options => dispatch => {
  API.createPostSuccess(options).then(data => {
    dispatch(createPost(data))
    dispatch(receivePostsSuccess())
  })
}
