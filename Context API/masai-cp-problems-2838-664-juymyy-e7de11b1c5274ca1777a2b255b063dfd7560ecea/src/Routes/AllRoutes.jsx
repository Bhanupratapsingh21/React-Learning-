import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import AllProducts from '../Pages/Products'
import { Route, Routes } from 'react-router'
import PrivateRoute from './PrivateRoute'
import Login from '../Pages/Login'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products' element={
                <PrivateRoute>
                    <AllProducts/>
                </PrivateRoute>
            }/>
            <Route path='/login' element={<Login/>} />
        </Routes>
    )
}
/*
    Login (should be rendered on route "/login")
    Home (should be rendedered on default route "/")
    About (should be rendered on route "/about")
    Contact (should be rendered on route "/contact")
    Products (should be rendered on route "/products")
 */
export {AllRoutes}