import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, createClient } from 'urql';
import 'normalize.css';
import './app.scss';

import App from './App';
import { getToken } from './token';

const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: () => {
    const token = getToken()
    return {
      headers: { authorization: token ? `Bearer ${token}` : ''}
    }
  }
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  rootElement
);
