import React, { useEffect, useState } from "react";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

function Bug(){
  const [rowEmail, setEmail] = useState("");
  const [rowErrorType,setErrorType] = useState("");
  const [rowText , setText] =useState("");

  // useEffect(() => {
  //   handleSubmit();
  // }, []);
  function handleSubmit(){
    axios.put('http://localhost:5003/bugs',
        {
           email:rowEmail,
           errorType:rowErrorType,
           text=rowText
        }
    )
    .catch((e) => {console.log("error", e)});
    
}
function handleEmailChange(e){
  setEmail(e.target.value);
}
function handleErrorTypeChange(e){
  setErrorType(e.target.value);
}
function handleTextChange(e){
  setText(e.target.value);
}
  return (
    <div className = "container-fluid h-500" >
      <br />
      <center>
        <h2>Bug</h2>
        <div className="ag-theme-alpine" style={{ width: '250px', height: '300px' }}>
        <form>
                <label style={{padding: 10}}>Email: 
                    <input type="email"  name = "email" onChange = {handleEmailChange}/>
                </label>
                <label>ErrorType: 
                    <input type="text" name = "errorType" onChange = {handleErrorTypeChange}/>
                </label>
                <label>Error: 
                    <input type="text" name = "text" onChange = {handleTextChange}/>
                </label>
                <input type="submit" name="Submit" onClick = {handleSubmit}/>
            </form>
       </div>
      </center>
      
    
    </div>
  );
  }
  
export default Bug;