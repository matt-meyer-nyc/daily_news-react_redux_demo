const URL = 'http://localhost:3006';

////////////////////////////////////////////////////
// HOME CONTAINER RELATED

export function latestNews() {

    //json-server allows for these queries in url .. _end=3 limits results to first three
  const req = fetch(`${URL}/articles?_order=desc&_end=3`, {

    method: 'GET'

  }).then(res => res.json())

 return {

   type: 'GET_LATEST',
   payload: req

 }

}

export function otherNews() {

  const req = fetch(`${URL}/articles?_order=desc&_start=3&_end=10`, { //make req for only  max 10 articles

    method: 'GET'

  }).then(res => res.json())

 return {

   type: 'GET_OTHER',
   payload: req

 }

}

export function latestGallery() {

  const req = fetch(`${URL}/galleries?_order=desc&_limit=2`, { //make req for only  max 10 articles

    method: 'GET'

  }).then(res => res.json())

 return {

   type: 'GET_GALLERY',
   payload: req

 }

}

/////////////////////////////////////////////
//NEWS CONTAINER RELATED

export function selectedNews(id) {

  const req = fetch(`${URL}/articles?id=${id}`, { //make req for only  max 10 articles

    method: 'GET'

  }).then(res => res.json())

 return {

   type: 'GET_SELECTED_NEWS',
   payload: req

 }

}

export function clearSelectedNews() {

 return {

   type: 'CLEAR_SELECTED_NEWS',
   payload: []

 }

}

/////////////////////////////////////////////
//GALLERY CONTAINER RELATED

export function selectedGallery(id) {

  const req = fetch(`${URL}/galleries?id=${id}`, { //make req for only  max 10 articles

    method: 'GET'

  }).then(res => res.json())

 return {

   type: 'GET_SELECTED_GALLERY',
   payload: req

 }

}

export function clearSelectedGallery() {

 return {

   type: 'CLEAR_SELECTED_GALLERY',
   payload: []

 }

}


/////////////////////////////////////////////
// LikesCounter RELATED

export function handleLikes(array, id, section, type) { //new state off array (i.e. newLikes) and id

  const req = fetch(`${URL}/${section}/${id}`, { // section dynamically being used here so if Counter component
                                                 // is injected into Gallery url would be '/galleries/id' OR
    method: 'PATCH',                             // if in News would be '/articles/id' (depending on if News.js
    headers: {                                   // or Gallery.js is passing props as parent component
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({likes: array}) // update made to likes

  }).then(res => res.json()) // get response back to render update

  return {

    type: type, // type is dynamically being passed in as argument at beginning of this function,
    payload: req     // so will be usable with both the articles and galleries reducers

  }

}
