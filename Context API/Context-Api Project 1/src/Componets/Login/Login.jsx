import React, { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";

function Login (){

    const [username , setusername] =useState("")
    const [password,setpassword] =useState("")
    const {setUser} = useContext(UserContext)
    
    const handlesubmt = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    
    return(
    <div>
        <h2>Login</h2>
        <input type="text" 
            value={username} onChange={(e)=>setusername(e.target.value)} placeholder="username" />
        <input type="text"
        value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="Password" />
        <button onClick={handlesubmt}>Submit</button>
    </div>
    )
}
export default Login