import React, { useContext, useEffect, useState } from 'react';
import { IConfig } from './config/interfaces';
import { Context } from './context/context';
import Active from './components/Active';
import Completed from './components/Completed';
import NewTask from './components/NewTask';
import Chat from './components/Chat';
import { Container, Button } from 'react-floating-action-button';
import NavigateWebsite from './components/NavigateWebsite';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import {Button,ButtonGroup} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const App: React.FC = (props) => {
const config: IConfig = JSON.parse(useContext(Context));
const [page, setPage] = useState<Number>(1);
const [appNavSelected, setAppNavSelected] = useState(false);
const [chatbotSelected, setChatbotSelected] = useState(false);
const [appAnnouncementsSelected, setAppAnnouncementsSelected] = useState(false);
const [appImprovementSelected, setAppImprovementSelected] = useState(false);
const [bugsSelected, setBugsSelected] = useState(false);
const [usageSelected, setUsageSelected] = useState(false);
 useEffect(() => {
    axios.get("http://127.0.0.1:5001/api?key=konnex123")
    .then((response) => {
      const data = JSON.parse(response.data);
      setAppAnnouncementsSelected(data.announcements);
      setAppNavSelected(data.applicationNavigation);
      setAppImprovementSelected(data.suggestions);
      setBugsSelected(data.bugs);
      setChatbotSelected(data.chatbot);
      setUsageSelected(data.usage);
    })
    .catch((error) => {
      console.log("error", error);
    })
  }, []);

  const renderHeader = () => {
    return (
    <div className="p-3 m-0 text-white pull-right ">
      <button className="bg-transparent text-white"><i className="fa fa-close"></i></button>
     </div>);
  }
  
 const renderLinks = () => {
   return (
    <Container>
       { !appNavSelected ? <Button 
          onClick={() => setPage(4)}
          
          tooltip="Navigate this website"
          icon="fa fa-arrows" /> : ""
       }
      
      {!chatbotSelected ? <Button 
            onClick={() => setPage(5)}
            
            tooltip="chat support"
            icon="fa fa-comment" />: ""
      }

      {
        !appAnnouncementsSelected ? <Button 
            onClick={() => setPage(2)}
            
            tooltip="Announcements"
            icon="fa fa-bullhorn" />: ""
      }

      {!appImprovementSelected ? <Button 
            onClick={() => setPage(2)}
            
            tooltip="Suggest Improvements"
            icon="fa fa-sticky-note" />: ""
      }
      {
        !bugsSelected ? <Button 
            onClick={() => setPage(2)}
            
            tooltip="Report Bug"
            icon="fa fa-bug" />: ""
      }

        
        
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

 return (<div className="border rounded bg-blue text-white">
   {//renderHeader()
   }
   {renderLinks()}
   
   {renderComponent()}
   
 </div>);
}

export default App;