import * as types from './actionTypes';

export function fetchData() {
  return dispatch => {
    dispatch(requestData())
    dispatch(loading())
    return fetch('http://roadmapservice.azurewebsites.net/api/buckets')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((responseJson) => {
      dispatch(successfulRequest(responseJson))
    })
    .catch((error) => {
      dispatch(failedRequest())
    });
  }
}

function requestData() {
  return {
    type: types.REQUEST
  }
}

function loading() {
  return {
    type: types.LOADING
  }
}

function successfulRequest(json) {
  return {
    type: types.SUCCESS,
    payload: json
  }
}

function failedRequest() {
  return {
    type: types.FAIL
  }
}