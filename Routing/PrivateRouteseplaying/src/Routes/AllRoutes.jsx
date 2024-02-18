import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "../Componets/Home"
import Products from "../Componets/Products";
import PrivateRoute from "./PrivateRoute"
function AllRoutes (){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={
                <PrivateRoute>
                    <Products/>
                </PrivateRoute>
            }/>
        </Routes>
    )
}
export default AllRoutes;