import React, { useEffect, useState } from "react";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

const NavigateWebsite = (Props) => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetchNavs();
  }, []);

  function fetchNavs(){
      axios.get('http://127.0.0.1:5000/api?key=konnex123')
      .then((response) => {
          const data = JSON.parse(response.data)
          setRowData(data);
      })
      .catch((e) => {console.log("error", e)});
  }
  return (
    <div className = "container-fluid h-500" >
      <br />
      <center>
        <h2>Navigation</h2>
        <div className="ag-theme-alpine" style={{ width: '250px', height: '300px' }}>
           <AgGridReact
            rowData={rowData}>
            <AgGridColumn field="navigation" sortable={ true } filter={ true } resizable={true} width = {150}></AgGridColumn>
            <AgGridColumn field="path" resizable={true} width = {150}></AgGridColumn>
           </AgGridReact>
       </div>
      </center>
      
    
    </div>
  );
  }
  
export default NavigateWebsite;