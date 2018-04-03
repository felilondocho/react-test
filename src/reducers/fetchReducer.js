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
      // return Object.assign({}, state, {components: [], currentState: 'request'})
    case types.SUCCESS:
      console.log('success')
      return {...state, items: action.payload, error: false, isFetching: false}
      // return Object.assign({}, state, {components: action.payload, currentState: 'success'})
    case types.FAIL:
      console.log('fail')
      return {...state, items: [], error: action.payload, isFetching: false}
      // return Object.assign({}, state, {components: [], currentState: 'fail'})
    default:
      return state
  }
}
