import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Youtube from './api/youtube';
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const youtube = new Youtube(API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
