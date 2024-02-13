import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Leyout from './Leyout/Layout.jsx'
import Home from './Componets/Home/Home.jsx'
import About from './Componets/About/About.jsx'
import Contacts from './Componets/Contacts/Contacts.jsx'
import User from './Componets/User/User.jsx'
import Github , { githubinfoloader } from './Componets/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Leyout/>,
    children:[
      {
        path:"Home",
        element:<Home/>
      },
      {
        path:"about",
        element : <About/>
      },
      {
        path:"Contacts",
        element : <Contacts/>
      },
      {
        path:"User/:userid",
        element : <User/>
      },
      { 
        loader : (githubinfoloader),
        path:"Github",
        element : <Github/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

/*
 const router = createBrowserRouter(
  createRountsFromElements(
    <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home />} />
        <Route path="about" element={About />} />
        <Route path="contacts" element={Contacts />} />
    <Route/>
  )
 )

*/