import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col,
  } from "reactstrap";
function Chatbot() {
    return (
        <div className="content">
            <h1>Chatbot</h1>
            
         <Card className="card-stats">
                  <form style={{padding:"10px"}}>
                      
                      <p>Enter your Question:</p>
                      <input style={{ height: "40px", width:"780px"}}
                        type='text'
                        name='question'
                       // value=''
                        //onChange=""
                      />
                    <p>Enter your Answer:</p>
                      <input style={{ height: "40px", width:"780px"}}
                        type='text'
                        name='answer'
                       // value=''
                        //onChange=""
                      />
                     
                  </form>
               <CardFooter>
                <hr />
                 <CardBody>
                <div className="numbers">
                  <p className="card-category">
                  <input type="submit" value="Submit" />
                  </p>
                  <p />
                </div>
              </CardBody> 
              </CardFooter>
            </Card>
        </div>
    )
}

export default Chatbot;