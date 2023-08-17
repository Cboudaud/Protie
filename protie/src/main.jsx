import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import Calculator from './components/Calculator/Calculator'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Calculator />
  </React.StrictMode>,
)
