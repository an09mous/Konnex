import React, { useContext, useEffect, useState } from 'react';
import { IConfig } from './config/interfaces';
import { Context } from './context/context';
import Active from './components/Active';
import Completed from './components/Completed';
import Chat from './components/Chat';
import { Container, Button } from 'react-floating-action-button';
import NavigateWebsite from './components/NavigateWebsite';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import Announcements from './components/Announcements';

const App: React.FC = () => {
const config: IConfig = JSON.parse(useContext(Context));
const [page, setPage] = useState<Number>(1);
const [appNavSelected, setAppNavSelected] = useState(false);
const [chatbotSelected, setChatbotSelected] = useState(false);
const [appAnnouncementsSelected, setAppAnnouncementsSelected] = useState(false);
const [appImprovementSelected, setAppImprovementSelected] = useState(false);
const [bugsSelected, setBugsSelected] = useState(false);
const [usageSelected, setUsageSelected] = useState(false);
const key = 'konnex123';

useEffect(() => {
  axios.get(`http://127.0.0.1:5001/api?key=${key}}`)
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
  
 const renderLinks = () => {
   return (
    <Container>
       {!appNavSelected ? <Button 
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
            style = {{opacity: 1}}
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
     case 2: return <Announcements/>
     case 3: return <Completed config={config}/>
     case 4: return <NavigateWebsite/>
     case 5: return <Chat/>
     default: return
   }
 }

 return (<div className="border rounded bg-blue text-white">
   {renderLinks()}
   
   {renderComponent()}
   
 </div>);
}

export default App;