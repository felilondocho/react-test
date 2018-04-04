import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/fetchReducer';
import thunk from 'redux-thunk'

import './index.css';
import AppContainer from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <AppContainer />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
