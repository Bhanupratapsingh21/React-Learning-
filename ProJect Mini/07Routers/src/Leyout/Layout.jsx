import React from "react";
import Header from "../Componets/Header/Header";
import Footer from "../Componets/Footer/Footer";
import { Outlet } from "react-router-dom";
function Leyout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Leyout