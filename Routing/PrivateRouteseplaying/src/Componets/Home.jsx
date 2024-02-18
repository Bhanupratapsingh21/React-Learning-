import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AuthContext } from "../Context/AuthContextprovider";

function Home (){
  const { Auth ,setAuth } = useContext(AuthContext);
  
  console.log(Auth)
  const toggle = ()=>{
    setAuth(!Auth)
  }
  return(
    <div>
      <h1>Hello</h1>
      <h1> Home / Auth : {Auth ? "T" : "F"}</h1>
      <Link to="/products">Products</Link> {/* Corrected typo "Produts" to "Products" */}
      <button onClick={toggle} >set-to-t</button>
    </div>
  )
}

export default Home;
