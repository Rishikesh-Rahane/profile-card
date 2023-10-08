import React from "react";
import "./Style/style.css"
export default function Loading(){
    return(
        <div style={{width:'100px',display:'flex',flexDirection:'column',alignItems:'center'}}>
             <div className="loader"></div> 
            <h1>Loading</h1>
        </div>
    )
}