import React from "react";
import { useRouteError } from "react-router-dom";

function Errorpage (){
    const error = useRouteError()
    console.log(error)
    return(
       <div>
         <h1>
            HAA BHAI GLT AA GAYE:{error.statusText || error.massage}
        </h1>
       </div>
    )
}
export default Errorpage