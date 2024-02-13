import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
function Profile (){
 const {User} = useContext(UserContext);
    return(
        <div>
            {User ? <h1>Welcome {User.username}</h1> : <h1>Please Login</h1>}
        </div>
    )
}
export default Profile