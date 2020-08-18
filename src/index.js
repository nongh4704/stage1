import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router.jsx';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';
import thunk from "redux-thunk";

import reducer from './reducers/index';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger,thunk)));

ReactDOM.render(
  <Provider store = {store}>
      <Router/>
  </Provider>,
  document.getElementById('root')
);