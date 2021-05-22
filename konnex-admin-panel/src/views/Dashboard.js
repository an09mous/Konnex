import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import axios from 'axios';

import {
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

function Dashboard() {

  const [appNavSelected, setAppNavSelected] = useState(false);
  const [chatbotSelected, setChatbotSelected] = useState(false);
  const [appAnnouncementsSelected, setAppAnnouncementsSelected] = useState(false);
  const [appImprovementSelected, setAppImprovementSelected] = useState(false);
  const [bugsSelected, setBugsSelected] = useState(false);
  const [usageSelected, setUsageSelected] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api?key=konnex123")
    .then((response) => {
      const data = JSON.parse(response.data);

      setAppAnnouncementsSelected(data.announcements);
      setAppNavSelected(data.applicationNavigation);
      setAppImprovementSelected(data.suggestions);
      setBugsSelected(data.bugs);
      setChatbotSelected(data.chatbot);
    })
    .catch((error) => {
      console.log("error", error);
    })
  }, []);

  function updateConfig() {
    axios.put("http://127.0.0.1:5000/api?key=konnex123",
      {
        key: "konnex123",
        announcements: appAnnouncementsSelected,
        applicationNavigation: appNavSelected,
        suggestions: appImprovementSelected,
        bugs: bugsSelected,
        chatbot: chatbotSelected,
        usage: usageSelected
      }
    )
  }
  
  return (
    <>
      <div className="content">
        <Row>

          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <div className="numbers">
                  <p className="card-category">
                    <NavLink
                      to={"/admin/applicationNavigation"}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <p>Application Navigation</p>
                    </NavLink>
                  </p>
                  <p />
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <ToggleButton
                    selected={appNavSelected}
                    toggleSelected={() => {
                      setAppNavSelected(!appNavSelected);
                      updateConfig();
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <div className="numbers">
                  <p className="card-category">
                  <NavLink
                      to={"/admin/chatbot"}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <p>Chatbot</p>
                    </NavLink>
                  </p>
                  <p />
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                <ToggleButton
                    selected={chatbotSelected}
                    toggleSelected={() => {
                      setChatbotSelected(!chatbotSelected);
                      updateConfig();
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <div className="numbers">
                  <p className="card-category">
                  <NavLink
                      to={"/admin/applicationImprovement"}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <p>Application Improvement</p>
                    </NavLink>
                  </p>
                  <p />
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                <ToggleButton
                    selected={appImprovementSelected}
                    toggleSelected={() => {
                      setAppImprovementSelected(!appImprovementSelected);
                      updateConfig();
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <div className="numbers">
                  <p className="card-category">
                  <NavLink
                      to={"/admin/bugs"}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <p>Bug reporting and Feedback</p>
                    </NavLink>
                  </p>
                  <p />
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                <ToggleButton
                    selected={bugsSelected}
                    toggleSelected={() => {
                      setBugsSelected(!bugsSelected);
                      updateConfig();
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <div className="numbers">
                  <p className="card-category">
                    <NavLink
                      to={"/admin/collectiveAnnouncements"}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <p>Collective Announcements</p>
                    </NavLink>
                  </p>
                  <p />
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                <ToggleButton
                    selected={appAnnouncementsSelected}
                    toggleSelected={() => {
                      setAppAnnouncementsSelected(!appAnnouncementsSelected);
                      updateConfig();
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <div className="numbers">
                  <p className="card-category">
                    <NavLink
                      to={"/admin/usageAndPerformance"}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <p>Usage and Performance</p>
                    </NavLink>
                  </p>
                  <p />
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                <ToggleButton
                    selected={usageSelected}
                    toggleSelected={() => {
                      setUsageSelected(!usageSelected);
                      updateConfig();
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
