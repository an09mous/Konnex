import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "./ToggleButton";

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
