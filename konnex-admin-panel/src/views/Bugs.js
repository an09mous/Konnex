import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col,
  } from "reactstrap";
import routes from "routes";

function Bugs() {
    return (
        <div className="content">
            <h1>Bugs reporting and Feedback</h1>

            <Card className="card-stats">
              <h3 style={{padding:"10px"}}> Riya Bhardwaj</h3>
              <p style={{padding:"10px"}}>The headline text size and color on the Admin page don't match the original designs.</p>
            </Card>

            <Card className="card-stats">
              <h3 style={{padding:"10px"}}> Nikita</h3>
              <p style={{padding:"10px"}}>The headline text size and color on the Admin page don't match the original designs.</p>
            </Card>
            <Card className="card-stats">
              <h3 style={{padding:"10px"}}> Shivam</h3>
              <p style={{padding:"10px"}}>The headline text size and color on the Admin page don't match the original designs.</p>
            </Card>
            <Card className="card-stats">
              <h3 style={{padding:"10px"}}>  Narendra</h3>
              <p style={{padding:"10px"}}>The headline text size and color on the Admin page don't match the original designs.</p>
            </Card>
        </div>
    )
}

export default Bugs;