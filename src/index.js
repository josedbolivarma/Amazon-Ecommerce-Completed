import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
