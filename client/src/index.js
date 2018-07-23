/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { Cloudinary } from 'cloudinary-core';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import CloudinaryProvider from './components/CloudinaryProvider';
import './index.css';

const cloudinary = Cloudinary.new({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

ReactDOM.render(
  <CloudinaryProvider.Provider value={cloudinary}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </CloudinaryProvider.Provider>,
  document.getElementById('root')
);
