import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

import reducer, { initialState } from './reducer';

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

render();
store.subscribe(render);

registerServiceWorker();
