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

export function receivePostsIDSuccess(id){
    return fetch(`http://localhost:5001/posts/${id}`, header).then( out => {
        return out.json()
    })
}

export function categoryPostsSuccess(category) {
    return fetch(`http://localhost:5001/${category}/posts`, header).then( out => {
        return out.json()
    })
}
