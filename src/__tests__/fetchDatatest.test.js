import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchData } from '../actions/fetch'
import { loadDataSuccess } from '../actions/fetch'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

it('should execute fetch data', () => {
  const store = mockStore({})
  return store.dispatch(fetchData())
    .then(() => {
      expect(store.getActions()).toMatchSnapshot();
    })
})