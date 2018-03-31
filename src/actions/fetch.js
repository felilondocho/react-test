import * as types from './actionTypes';
 
export function fetchData() {
  return (dispatch, getState) => {
    return fetch('http://roadmapservice.azurewebsites.net/api/buckets')
      .then(response => response.json())
      .then(json => dispatch( { type: types.FETCH_DATA, payload: json }))
  }
}
