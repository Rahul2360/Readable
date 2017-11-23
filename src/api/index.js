const header = {
  headers: {
    'Authorization': 'Any'
  }
}

export function getCategories() {
  return fetch('http://localhost:5001/categories' , header ).then((out) => out.json())
  .then((data) => data.categories)
}

export function receivePostsSuccess() {
  return fetch('http://localhost:5001/posts' , header ).then(out => {
      return out.json()
  })
}

export function receivePostsIDSuccess(id,posts){
    return fetch(`http://localhost:5001/posts/${id}`,{
		 headers:header.headers,
        method:'PUT',
        body:JSON.stringify(posts)
	}).then( out => {
        return out.json()
    })
}

export function categoryPostsSuccess(category) {
    return fetch(`http://localhost:5001/${category}/posts`, header).then( out => {
        return out.json()
    })
}

export function votePostSuccess(postID,vote){
  return fetch(`http://localhost:5001/posts/${postID}`, {
    headers:header.headers,
    method:'POST',
    body:JSON.stringify({vote:vote})
  }).then(out => {
    return out.json()
  })
}

export function deletePostSuccess(postID) {
  return fetch(`http://localhost:5001/posts/${postID}`, header).then(out =>{
    return out.json()
  })
}

// COMMENTS SECTION
export function getCommentsSuccess(postID) {
  return fetch(`http://localhost:5001/posts/${postID}/comments`, header).then(out => {
    return out.json()
  })
}

export function addCommentsSuccess(options){
  return fetch(`http://localhost:5001/comments`, {
    headers:header.headers,
    method:'POST',
    body:JSON.stringify(options)
  }).then(out => {
    return out.json()
  })
}

export function voteCommentsSuccess(commentID,options){
  return fetch(`http://localhost:5001/comments/${commentID}`, {
    headers:header.headers,
    method:'POST',
    body:JSON.stringify(options)
  }).then(out => {
    return out.json()
  })
}
