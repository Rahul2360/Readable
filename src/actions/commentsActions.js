import * as API from '../api'
export const GET_COMMENTS = 'GET_COMMENTS';
export const FILTER_COMMENTS ='FILTER_COMMENTS';
export const ADD_COMMENTS ='ADD_COMMENTS';
export const VOTE_COMMENTS ='VOTE_COMMENTS';
export const DELETE_COMMENTS ='DELETE_COMMENTS';
export const EDIT_COMMENTS ='EDIT_COMMENTS';
export const UPDATE_COMMENTS ='UPDATE_COMMENTS';

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

export const filterComments = filter => {
  return {
    type:FILTER_COMMENTS,
    filter
  }
}

export const addComments = comment => {
  return {
    type:ADD_COMMENTS,
    comment
  }
}

export const addCommentsSuccess = (options,postID) => dispatch => {
  API.addCommentsSuccess(options,postID).then(data => {
    dispatch(addComments(data))
    dispatch(getComments(postID))
  })
}

export const voteComments = comment => {
  return {
    type:VOTE_COMMENTS,
    comment
  }
}

export const voteCommentsSuccess = (commentID,options,postID) => dispatch => {
  API.voteCommentsSuccess(commentID,options,postID).then(data => {
    dispatch(voteComments(data))
    dispatch(getComments(postID))
  })
}

export const editComments = comment => {
  return {
    type:EDIT_COMMENTS,
    comment
  }
}

export const deleteComments = (comment) => {
  return {
    type:DELETE_COMMENTS,
    comment
  }
}

export const deleteCommentsSuccess = (commentID,postID) => dispatch =>{
  API.deleteCommentsSuccess(commentID,postID).then(data => {
    dispatch(deleteComments(data))
    dispatch(getComments(postID))
  })
}

export const updateComments = (comment) => {
  return {
    type:UPDATE_COMMENTS,
    comment
  }
}

export const updateCommentsSuccess = (commentID,options,postID) => dispatch => {
  API.updateCommentsSuccess(commentID,options,postID).then(data => {
    dispatch(updateComments(data))
    dispatch(getComments(postID))
  })
}
