import React  from "react";
import { Link ,NavLink} from "react-router-dom";
function Footer (){
    return(
        <div>
            <h1>FOoter</h1>
            <br />
            <Link to={"About/default"} >About</Link>
            <br />
            <Link to={""} >Home</Link>
            <br />
        </div>
    )
}
export default Footer