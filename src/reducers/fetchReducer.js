import * as types from '../actions/actionTypes';
 
const initialState = {
  items: [],
  error: false,
  isFetching: false,
};

export default function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.REQUEST:
      return {...state, items: [], isFetching: true}
    case types.SUCCESS:
      return {...state, items: action.payload, error: false, isFetching: false}
    case types.FAIL:
      return {...state, items: [], error: true, isFetching: false}
    default:
      return state
  }
}
