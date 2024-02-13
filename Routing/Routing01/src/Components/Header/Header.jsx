import React from "react";
import {Link,NavLink} from 'react-router-dom'
function Header (){

    // install router by npm install react-router-dom 

    // then import link or navlink

    // diff between link or navlink or not use of a 
    // navlink additional is active wala
    // use of navlink how to use it by navlink class name or isactive
    return(

        <div>
            <h2>head</h2>
            <br />
            <NavLink to={""}className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${ isActive ? "text-orange-700" : "text-gray-700"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                Home
            </NavLink>
            <br />
            <NavLink to={"About/default"} className={({isActive})=> `${isActive ? "text-red-700":"text-blue-400"}`}>
                Aboutme
            </NavLink>           
        </div>
    
    )
}

export default Header