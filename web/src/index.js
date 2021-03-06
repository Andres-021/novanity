import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteApp from './routes/routeApp';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from "@apollo/client";

import client from './apollo.js';

ReactDOM.render(
  <ApolloProvider client={client}>
    <RouteApp />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
