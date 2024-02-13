import React from 'react'
import './App.css'
import Login from './Componets/Login/Login'
import Profile from './Componets/Profile/Profile'
import UserContextProvider from './Context/UserContextProvider'
function App() {

  return (
    <div>
      <h2>HEllo</h2>
      <UserContextProvider>
       <h1>React-Context</h1>
       <Login/>
       <Profile/>  
      </UserContextProvider>
    </div>
    )
}

export default App
