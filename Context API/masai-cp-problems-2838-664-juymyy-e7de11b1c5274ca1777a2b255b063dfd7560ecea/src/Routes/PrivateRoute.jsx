import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import Login from "../Pages/Login";
import { Navigate } from "react-router-dom"; // Import Navigate from react-router-dom
import AllProducts from "../Pages/Products";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  return ( isAuth ? children : <Navigate to="/login" />);
}

export default PrivateRoute;
