import React from "react";
function PostItem ({data}){
    return(
        <>
        <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle">ID:{data.id} Tittle :{data.title}</div>
            <div className="notibody">Caption:{data.body}</div>
        </div>
        </>

    )
}
export default PostItem