/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/App/App'
import Calculator from './components/Calculator/Calculator'
import './index.css'
import store from '../src/store/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    <Calculator />
  </React.StrictMode>
  </Provider>
)
