// all the data which is fetch from the server is processed here
const BASE = 'http://localhost:5001'
const header = {
  headers: {
    'Authorization': 'Any'
  }
}

// Following function is pass to the  getCategories action and then it redirect to the below link
export function getCategories() {
  return fetch(`${BASE}/categories` , header ).then((out) =>{
    return out.json()
  })
}

// Follwing funtion receive posts
export function receivePostsSuccess() {
  return fetch(`${BASE}/posts` , header ).then((out) => {
      return out.json()
  })
}

// Follwing funtion receive posts according to their specific id
export function receivePostsIDSuccess(id){
    return fetch(`${BASE}/posts/${id}`,header).then((out) => {
        return out.json()
    })
}

// follwing function help to put th posts int their respective category
export function categoryPostsSuccess(category) {
    return fetch(`${BASE}/${category}/posts`, header).then((out) => {
        return out.json()
    })
}
// Following function helps to voting the post
export function votePostSuccess(postID,option){
  return fetch(`${BASE}/posts/${postID}`, {
    method:'POST',
    headers: {
      ...header.headers,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({option:option})
  }).then((out) => {
    return out.json()
  })
}
// Following function helps to delete the post
export function deletePostSuccess(postID) {
  return fetch(`${BASE}/posts/${postID}`,{
    headers:header.headers,
    method:'DELETE'
  })
}
// Follwing function helps to create new post
export function  createPostSuccess(options){
  return fetch(`${BASE}/posts`, {
    headers:header.headers,
    method:'POST',
    body:JSON.stringify(options)
  }).then((out) => {
    return out.json()
  })
}
// Follwing function helps to edit the posts
export function editPostSuccess(postID,options){
  return fetch(`http:///localhost:5001/posts/${postID}`, {
    headers:header.headers,
    method:'PUT',
    body:JSON.stringify(options)
  }).then((out) => {
    return out.json()
  })
}

// COMMENTS SECTION
// Follwing section helps to get comments
export function getCommentsSuccess(postID) {
  return fetch(`${BASE}/posts/${postID}/comments`, header).then((out) => {
    return out.json()
  })
}
// Following function helps us t adding new comments
export function addCommentsSuccess(options,postID){
  return fetch(`${BASE}/comments`, {
    headers:header.headers,
    method:'POST',
    body:JSON.stringify(options)
  }).then((out) => {
    return out.json()
  })
}
// Following function helps us to vote the comment
export function voteCommentsSuccess(commentID,option,postID){
  return fetch(`${BASE}/comments/${commentID}`, {
    method:'POST',
    headers: {
      ...header.headers,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({option:option})
  }).then((out) => {
    return out.json()
  })
}
// Following function helps us to delete our comments
export function deleteCommentsSuccess(commentID,postID){
  return fetch(`${BASE}/comments/${commentID}`, {
    headers:header.headers,
    method:'DELETE'
  }).then((out) => {
    return out.json()
  })
}

// Following function helps us to delete our comments
export function updateCommentsSuccess(commentID,options,postID) {
  return fetch(`${BASE}/comments/${commentID}`,{
    headers:header.headers,
    method:'PUT',
    body:JSON.stringify(options)
  }).then((out) => {
    return out.json()
  })
}
