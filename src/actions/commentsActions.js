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

export const addCommentsSuccess = option => dispatch => {
  API.addCommentsSuccess(option).then(data => {
    dispatch(addComments(data))
  })
}

export const voteComments = comment => {
  return {
    type:VOTE_COMMENTS,
    comment
  }
}

export const voteCommentsSuccess = (commentID,options) => dispatch => {
  API.voteCommentsSuccess(commentID,options).then(data => {
    dispatch(voteComments(data))
  })
}
