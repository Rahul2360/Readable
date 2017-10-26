import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from  'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/';
import thunk from 'redux-thunk';

/*Redux Thunk middleware allows you to write action creators that return a function instead of an action.
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
The inner function receives the store methods dispatch and getState as parameters.*/

// Following code is used for displaying the data at the consoel so that we can understand the functality of the code

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger),
    applyMiddleware(logger,thunk)
  )
)

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
</BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
