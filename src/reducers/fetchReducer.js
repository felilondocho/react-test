import * as types from '../actions/actionTypes';
 
// const initialState = {
//   components: []
// };

const initialState = {
    estado: ''
  };
 
// export default function fetchData(state = initialState, action = {}) {
//   switch (action.type) {
//     case types.FETCH_DATA_SUCCESS:
//       return Object.assign({}, state, {components: action.payload})
//     default:
//       return state
//   }
// }

export default function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.REQUEST:
      console.log('aa')
      return Object.assign({}, state, {estado:'request'})
    case types.LOADING:
      return Object.assign({}, state, {estado:'loading'})
    case types.SUCCESS:
      return Object.assign({}, state, {estado:'success'})
    case types.FAIL:
      return Object.assign({}, state, {estado:'fail'})
    default:
      return state
  }
}