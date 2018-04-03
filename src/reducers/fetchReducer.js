import * as types from '../actions/actionTypes';
 
const initialState = {
  components: [],
  currentState: 'initial'
};

export default function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.REQUEST:
      console.log('request')
      return Object.assign({}, state, {components: [], currentState: 'request'})
    case types.LOADING:
      console.log('loading')
      return Object.assign({}, state, {components: [], currentState: 'loading'})
    case types.SUCCESS:
      console.log('success')
      return Object.assign({}, state, {components: action.payload, currentState: 'success'})
    case types.FAIL:
      console.log('fail')
      return Object.assign({}, state, {components: [], currentState: 'fail'})
    default:
      return state
  }
}