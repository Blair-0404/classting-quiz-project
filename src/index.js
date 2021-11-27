import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';// import './index.css';
import App from './App';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyles />
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

