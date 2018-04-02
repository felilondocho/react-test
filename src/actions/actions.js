import * as types from './actionTypes';

// function loadDataSuccess(json) {
//   console.log('fetched');
//   return {type: types.FETCH_DATA_SUCCESS, payload: json};
// }

// export function fetchData () {
//   return dispatch => {
//     return fetch('http://roadmapservice.azurewebsites.net/api/buckets')
//       .then(response => response.json())
//       .then(json => dispatch(loadDataSuccess(json)))
//   };
// }

export function callAPI() {
  return {
    type: types.REQUEST
  }
}

function fetchData() {
    return fetch('http://roadmapservice.azurewebsites.net/api/buckets')
      .then(response => response.json())
}

