import * as API from '../api'
export const GET_COMMENTS = 'GET_COMMENTS';
export const FILTER_COMMENTS ='FILTER_COMMENTS';
export const ADD_COMMENTS ='ADD_COMMENTS';
export const VOTE_COMMENTS ='VOTE_COMMENTS';
export const DELETE_COMMENTS ='DELETE_COMMENTS';
export const EDIT_COMMENTS ='EDIT_COMMENTS';
export const UPDATE_COMMENTS ='UPDATE_COMMENTS';

// Following function helps us to get the comments from the user and from the server
export const getComments = (comments) => {
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
// Following function helps us to filter or sort our comments
export const filterComments = filter => {
  return {
    type:FILTER_COMMENTS,
    filter
  }
}

// Following function helps us to adding new comments in the posts
export const addComments = (comment) => {
  return {
    type:ADD_COMMENTS,
    comment
  }
}
export const addCommentsSuccess = (options,postID) => dispatch => {
  API.addCommentsSuccess(options,postID).then((comment) => {
    dispatch(addComments(comment))
    dispatch(getCommentsSuccess(postID))
  })
}
// Following function helps us to vote the comment
export const voteComments = comment => {
  return {
    type:VOTE_COMMENTS,
    comment
  }
}

export const voteCommentsSuccess = (commentID,option,postID) => dispatch => {
  API.voteCommentsSuccess(commentID,option,postID).then((comment) => {
    dispatch(voteComments(comment))
    dispatch(getCommentsSuccess(postID))
  })
}
// Following function helps us to edit our comments
export const editComments = comment => {
  return {
    type:EDIT_COMMENTS,
    comment
  }
}
// Following function helps us to delete our comments
export const deleteComments = (comment) => {
  return {
    type:DELETE_COMMENTS,
    comment
  }
}

export const deleteCommentsSuccess = (commentID,postID) => dispatch =>{
  API.deleteCommentsSuccess(commentID,postID).then((comment) => {
    dispatch(deleteComments(comment))
    dispatch(getCommentsSuccess(postID))
  })
}
// Following function helps us to update our comments
export const updateComments = (comment) => {
  return {
    type:UPDATE_COMMENTS,
    comment
  }
}

export const updateCommentsSuccess = (commentID,options,postID) => dispatch => {
  API.updateCommentsSuccess(commentID,options,postID).then(comment => {
    dispatch(updateComments(comment))
    dispatch(getCommentsSuccess(postID))
  })
}
