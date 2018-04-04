import * as types from '../actions/actionTypes';
 
const initialState = {
  items: [],
  error: false,
  isFetching: false,
};

export default function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.REQUEST:
      console.log('request')
      return {...state, items: [], isFetching: true}
    case types.SUCCESS:
      console.log('success')
      return {...state, items: action.payload, error: false, isFetching: false}
    case types.FAIL:
      console.log('fail')
      return {...state, items: [], error: action.payload, isFetching: false}
    default:
      return state
  }
}
