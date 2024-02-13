import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Owncomponets from './Ownapp.jsx'

let myobj = {
  name : "bhanu",
  age : 45,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <App />
    <Owncomponets someobj={myobj} />
  </React.StrictMode>,
)
