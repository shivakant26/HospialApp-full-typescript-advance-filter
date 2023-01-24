import React from "react";
import { Button } from "react-bootstrap";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Dash } from "../Component/Dashboard/Dash";
import Dsidebar from "../Component/Dashboard/Dsidebar";
import { Col, Container, Row } from "react-bootstrap";
import { FiHome , FiChevronsRight } from "react-icons/fi";

const Dashboard = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/dashboard/", "");
  
  return (
    <>
      <div className="main-dash-page">
        <Container fluid>
          <Row>
            <Col md={3}>
              <Dsidebar />
            </Col>
            <Col md={9}>
              <div className="content">
                <Row>
                  <div className="bcamp-step">
                    <span className="bcamp-text">Doctor Dashboard</span>
                    <FiChevronsRight />
                    <span className="bcap-icon"><FiHome /></span>
                    <FiChevronsRight />
                    <span className="bcap-slug">{slug}</span>
                  </div>
                </Row>
                <Row>
                  <Outlet />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
