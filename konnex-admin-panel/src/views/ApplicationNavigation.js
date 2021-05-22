import React, { useEffect, useState } from "react";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from "axios";

function ApplicationNavigation() {
    const [rowData, setRowData] = useState([]);
    const [navigation, setNavigation] = useState("");
    const [path, setPath] = useState("");

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

    function handleSubmit(){
        axios.put('http://127.0.0.1:5000/api?key=konnex123',
            {
                navigation: navigation,
                path: path
            }
        )
        .then(() => fetchNavs())
        .catch((e) => {console.log("error", e)});
        
    }
    function handleNavigationChange(e){
        setNavigation(e.target.value);
    }
    function handlePathChange(e){
        setPath(e.target.value);
    }

    return (
        <div className="content">
        <center>
            <h1>Application Navigation</h1>
            <form>
                <label style={{padding: 10}}>Navigation: 
                    <input type="text"  name = "navigation" onChange = {handleNavigationChange}/>
                </label>
                <label>Path: 
                    <input type="text" name = "path" onChange = {handlePathChange}/>
                </label>
                <input type="submit" name="Submit" onClick = {handleSubmit}/>
            </form>

            <div className="ag-theme-alpine" style={{height: 1024, width: 1024}}>
                <AgGridReact
                    rowData={rowData}>
                    <AgGridColumn field="navigation" resizable={true} filter={true} width={512}></AgGridColumn>
                    <AgGridColumn field="path" resizable={true} width={512}></AgGridColumn>
                </AgGridReact>
            </div>
        </center>
            
        </div>
    )
}

export default ApplicationNavigation;