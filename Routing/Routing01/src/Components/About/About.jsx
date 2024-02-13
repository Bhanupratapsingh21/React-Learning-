import React from "react";
import { useParams } from "react-router-dom";
function About (){
const {Aboutid} = useParams()
    return (
    <div>
        <h1 className="text-3xl font-bold underline" >About HERE</h1>
        <br />
        <h1 >User : {Aboutid}</h1>
    </div>
)
}
export default About