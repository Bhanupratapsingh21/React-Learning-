import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Userprovider } from '../Context/UserContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Userprovider>
      <App />
    </Userprovider>
  </React.StrictMode>,
)
