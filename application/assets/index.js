'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Application from './container/Application';

const div = document.querySelector('.fake_body');
const store = createStore(reducer);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  div
);


