const URL = 'http://localhost:3006';

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
