    import React from "react";
    export default function Card({personDetail}){
        const style={
            width: '150px',
            height: '150px',
            border: '2px solid black',
            display: 'flex',
            alignItems: 'center',
            justifySelf:'center',
            justifyContent: 'center',
            backgroundColor:'pink'
            
        }
    return(
        <div style={style}>
            <h1>{personDetail.name}</h1>
        </div>
    )
    }