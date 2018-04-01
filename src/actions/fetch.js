import * as types from './actionTypes';

function loadDataSuccess(json) {
  return {type: types.FETCH_DATA_SUCCESS, payload: json};
}

export function fetchData () {
  return dispatch => {
    return fetch('http://roadmapservice.azurewebsites.net/api/buckets')
      .then(response => response.json())
      .then(json => dispatch(loadDataSuccess(json)))
  };
}
