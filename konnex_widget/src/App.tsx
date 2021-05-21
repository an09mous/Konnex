import React, { useContext, useState } from 'react';
import { IConfig } from './config/interfaces';
import { Context } from './context/context';
import Active from './components/Active';
import Completed from './components/Completed';
import NewTask from './components/NewTask';
import Chat from './components/Chat';
import { Container, Button } from 'react-floating-action-button';
import NavigateWebsite from './components/NavigateWebsite';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import {Button,ButtonGroup} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const App: React.FC = (props) => {
const config: IConfig = JSON.parse(useContext(Context));
const [page, setPage] = useState<Number>(1);
const renderHeader = () => {
   return (<h3 className="bg-dark p-3 m-0 text-white">Todo-List</h3>);
 }

 const renderLinks = () => {
   /*return (<div>
    <div className="nav row m-0 bg-light flex-column text-white">
    <a className="nav-link text-center btn btn-primary" href="#" onClick={() => setPage(4)}>Welcome</a>
      
      <a className="nav-link text-center btn btn-info" href="#" onClick={() => setPage(1)}>Active</a>
      <a className="nav-link text-center btn btn-warning" href="#" onClick={() => setPage(2)}>New</a>
      <a className="nav-link text-center btn btn-success" href="#" onClick={() => setPage(3)}>Completed</a>
      
    </div>
   </div>
   )*/
   return (
    <Container>
        <Button 
            onClick={() => setPage(4)}
            
            tooltip="Navigate this website"
            icon="fa fa-arrows" />
        <Button 
            onClick={() => setPage(5)}
            
            tooltip="chat support"
            icon="fa fa-comment" />
            
        <Button 
            onClick={() => setPage(2)}
            
            tooltip="Announcements"
            icon="fa fa-bullhorn" />
        <Button 
            onClick={() => setPage(2)}
            
            tooltip="Suggest Improvements"
            icon="fa fa-sticky-note" />
        <Button 
            onClick={() => setPage(2)}
            
            tooltip="Report Bug"
            icon="fa fa-bug" />
        
        <Button 
            onClick={() => setPage(2)}
            
            tooltip="Welcome"
            icon="fa fa-sticky-note" />
        
        <Button
            
            tooltip="Helpdesk"
            icon="fa fa-headphones"
            rotate={true}
            
           />
    </Container>
)
 }

 const renderComponent = () => {
   switch(page) {
     case 1: return <Active/>
     case 2: return <NewTask setPage={setPage}/>
     case 3: return <Completed config={config}/>
     case 4: return <NavigateWebsite/>
     case 5: return <Chat/>
     default: return
   }
  

 }

 return (<div className="h-100 w-100 border rounded bg-blue txt-wh text-white">
   {renderLinks()}
   {renderComponent()}
 </div>);
}

export default App;