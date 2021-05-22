import React,{Component} from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
const Chat = () => {
    
    const steps = [
        {
          id: '0',
          message: 'Hello',
          trigger: '1',
        },
        {
            id: '1',
            message: 'Please tell me your name',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          }, 
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: '4',
          },
          {
          id: '4',
        options: [
          { value: 1, label: 'option 1', trigger: '5' },
          { value: 2, label: 'option 2', trigger: '5' },
          { value: 3, label: 'option 3', trigger: '5' },
        ],
        },
        
        {
            id: '5',
            message: 'Thanks! please find us at xyz@company.com',
            trigger: '6',
        },
        {
          id: '6',
          message: 'Bye!',
          end: true,
        },
      ];
      
    return (
    <div>
        <div className="p-3 m-0 text-white pull-right ">
     <a className="bg-transparent txt-60"><i className="fa fa-comment text-white"></i></a>
    </div>    
        <div className="hscrollchat mg-bt-50">
            <ChatBot steps={steps} height="380px" width="100px"/>
        </div>
    </div>);
  }
  
export default Chat;