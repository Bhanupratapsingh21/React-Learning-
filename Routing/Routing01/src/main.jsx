import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Leyout from './Components/Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Errorpage from "./Components/Error/Errorpage.jsx"
// import route provider

/*const Router = createBrowserRouter([
  {
    path: '/',
    element: <Leyout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'About',
        element: <About/>
      }
    ]
  }
]);*/
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Leyout/>} errorElement={<Errorpage/>}>
      <Route path="" element={<Home/>}/>
      <Route path='About/:Aboutid' element={<About/>}/>
      <Route path=''/>
    </Route>
  )
)
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);