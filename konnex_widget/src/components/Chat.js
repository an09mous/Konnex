import React,{Component} from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
const Chat = () => {
    
    const steps = [
        {
          id: '0',
          message: 'Welcome to react chatbot!',
          trigger: '1',
        },
        {
            id: '1',
            message: 'I am here to help you with your queries!',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          }, 
          
        {
          id: '3',
          message: 'Bye!',
          end: true,
        },
      ];
      
    return (<div>
        <div className = "mg-bt-50 mg-top-50">
            <ChatBot steps={steps} hideHeader="true"/>
        </div>
      </div>);
  }
  
export default Chat;