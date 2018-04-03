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

export function fetchData() {
  return dispatch => {
    dispatch(requestData())

    return fetch('http://roadmapservice.azurewebsites.net/api/buckets')
      // .then(
      //   response => response.json(),
      //   error => console.log('An error occurred.', error)
      // )
      // .then(dispatch(successfulRequest()))
      .then(dispatch(successfulRequest()))
      .catch(dispatch(failedRequest()))
  }
}

function requestData() {
  return {
    type: types.REQUEST
  }
}

function successfulRequest(json) {
  return {
    type: types.SUCCESS
  }
}

function failedRequest() {
  return {
    type: types.FAIL
  }
}