import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const  data =  useLoaderData()
    
    // another way that is a uselloaderdata 
    
    /*
    const [data,setdata] =useState("")
    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setdata(data)
        })
    }, [])
    */
    

    return(
        


        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">GitHub Followers : {data.followers} 
        <br /> Name : {data.name}
        <img src={data.avatar_url} alt="gitimg" />
        </div>
        
        )   
}
export default Github

export const githubinfoloader = async () =>{
    const response = await fetch("https://api.github.com/users/Bhanupratapsingh21")
    return response.json()
}