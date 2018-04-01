import * as types from '../actions/actionTypes';
 
const initialState = {
  components: []
};
 
export default function fetchData(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {components: action.payload})
    default:
      return state
  }
}