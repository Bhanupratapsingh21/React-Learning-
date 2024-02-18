import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom';

export default function Login() {
    
    const userdetails = {
        email : "",
        password : ""
    };

    const {isAuth, setisAuth} = useContext(AuthContext);
    const [navigateToProducts, setNavigateToProducts] = useState(false); // State to trigger navigation to products

    // states
    const [formdata ,setformdata] = useState(userdetails);

    const handleChanges = (e)=>{
        setformdata({...formdata, [e.target.name]:e.target.value});
    };

    const handlesubmit = (e)=>{
        e.preventDefault();
        fetch("https://reqres.in/api/login" , {
            method: "POST",
            headers : {"Content-Type" : 'application/json'},
            body: JSON.stringify(formdata)
        })
        .then((res)=> res.json())
        .then((res)=>{
            if(res.token){
                setisAuth(true);
                console.log(res.token);
                setNavigateToProducts(true); // Set state to trigger navigation to products
            }
        });
    };

    // Redirect to products if navigateToProducts is true
    if (navigateToProducts) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <form className = "auth_form" onSubmit={handlesubmit}  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    name='email'
                    className = "email"
                    onChange={handleChanges}
                    placeholder = "Enter Email"
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    name='password'
                    className = "password"
                    placeholder = "Enter password"
                    onChange={handleChanges}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}
