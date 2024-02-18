import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextprovider";
function Products (){
    const {Auth,setAuth} =useContext(AuthContext)
    const handleclick =()=>{
        setAuth(false)
    }

    return(
        <div>
            <h2>Products Here</h2>
            <h2>Auth:{Auth ? "T" : "F"}</h2>
            <button onClick={handleclick}>Set-auth-to-f</button>
        </div>
    )
}
export default Products