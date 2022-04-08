import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StickerProvider } from './container';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StickerProvider>
    <Router>
      <App/>
    </Router>
  </StickerProvider>,
  document.getElementById('root')
);

reportWebVitals();
