import React, { useEffect, useState } from "react";
const axios = require("axios");
function Bugs() {
    const [rowData,setRowData] = useState([]);
    useEffect(()=>{
        BugApi();
    },[]);
    function BugApi(){
        console.log("djdjgdfd");
        axios.get('http://localhost:5003/bugs').then((response)=>{
            const data = response.data
            console.log(data);
            setRowData(data);
            console.log(data[0]);
        }).catch((e)=>{
            console.log(e);
        })
    }
    
    return (
        <div className="content">
        
         <center>
         <h1>Bug</h1>
         {
                rowData.map((bug,index)=>(
                    <h3 key ={index}>{bug.email} {bug.errorType} {bug.text} </h3>
                ))
            }
         </center>

        </div>
    )
}

export default Bugs;