import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextprovider";
import { Navigate } from "react-router-dom"
function PrivateRoute({ children }) {
    const { Auth } = useContext(AuthContext)
    return (Auth ? children : <Navigate to="/" />)
}
export default PrivateRoute