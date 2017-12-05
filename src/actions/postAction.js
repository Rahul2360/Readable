import * as API from '../api';
export const RECEIVE_POSTS='RECEIVE_POSTS';
export const RECEIVE_POSTS_ID='RECEIVE_POSTS_ID';
export const FILTER_POSTS='FILTER_POSTS';
export const CATEGORY_POSTS='CATEGORY_POSTS';
export const VOTE_POST ='VOTE_POST';
export const DELETE_POST ='DELETE_POST';
export const GET_COMMENTS ='GET_COMMENTS';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';

// It will get the posts from the server and display on the screen.
export const receivePosts = posts => {
  return  {
    type:RECEIVE_POSTS,
    posts
  }
}
export const receivePostsSuccess = () => (dispatch) => {
    API.receivePostsSuccess().then((posts) =>{
        dispatch(receivePosts(posts))
    });
}

// In this we can go to the specfic post i.e. we can click on any post so that we can change or edit the post.
export const receivePostsID = post => {
  return {
    type:RECEIVE_POSTS_ID,
    post
  }
}
export const receivePostsIDSuccess = (id) => (dispatch) => {
  API.receivePostsIDSuccess(id).then((post) => {
    dispatch(receivePostsID(post))
  });
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
  API.categoryPostsSuccess(category).then((posts) => {
    dispatch(categoryPosts(posts))
  })
}

// This function is used for the voting the particular post.
export const votePost = (post) => {
   return {
     type: VOTE_POST,
     post
   }
 }
 export const votePostSuccess = (postID, option) => (dispatch) => {
 	API.votePostSuccess(postID,option).then((post) => {
    dispatch(votePost(post))
    dispatch(receivePostsIDSuccess(postID))
    dispatch(receivePostsSuccess())
  })
}

// This function helps to delete the post
export const deletePost = post => {
return {
  type:DELETE_POST,
  post
}
}
export const deletePostSuccess = (postID) =>(dispatch) => {
  API.deletePostSuccess(postID).then((postID) => {
    dispatch(deletePost(postID))
    dispatch(receivePostsSuccess())
  })
}

// Follwing section helps to get comments of that particular post
export const getComments = comments => {
  return {
    type:GET_COMMENTS,
    comments
  }
}
export const getCommentsSuccess = postID => dispatch => {
  API.getCommentsSuccess(postID).then((comments) => {
    dispatch(getComments(comments))
  })
}

// Following function helps to creating the new post
export const createPost = post => {
  return {
    type:CREATE_POST,
    post
  }
}

export const createPostSuccess = options => dispatch => {
  API.createPostSuccess(options).then(post => {
    dispatch(createPost(post))
    dispatch(receivePostsSuccess())
  })
}

// Follwing function helps to edit our post
export const editPost = post => {
  return {
    type:EDIT_POST,
    post
  }
}

export const editPostSuccess = (postID,options) => dispatch => {
  API.editPostSuccess(postID,options).then(post => {
    dispatch(editPost(post))
  })
}
