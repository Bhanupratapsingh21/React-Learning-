import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";



/// use of pit let to provide things dynamiclly 


function Leyout (){

    return(
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    )

}

export default Leyout