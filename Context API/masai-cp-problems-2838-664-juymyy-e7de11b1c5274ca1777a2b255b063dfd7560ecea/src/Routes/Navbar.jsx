import { Link } from "react-router-dom"
function Navbar() {
    return(
        <div className = "navbar" >
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/products"}>Products</Link>
        </div>
    )
}
/*
    Login (should be rendered on route "/login")
    Home (should be rendedered on default route "/")
    About (should be rendered on route "/about")
    Contact (should be rendered on route "/contact")
    Products (should be rendered on route "/products")
 */

export { Navbar }