import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col,
  } from "reactstrap";
function CollectiveAnnouncements() {
    return (
        <div className="content">
          <h1>Collective  Announcements</h1>
         <Card className="card-stats">
                  <form style={{padding:"10px"}}>
                      
                      <p>Enter your Announcement:</p>
                      <input style={{ height: "40px", width:"780px"}}
                        type='text'
                        name='announcement'
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

export default CollectiveAnnouncements;