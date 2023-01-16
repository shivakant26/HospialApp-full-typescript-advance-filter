import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logoImg from "../../assets/site-logo.jpg";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="medi-header">
        <Container fluid>
          <div className="header-content">
            <Row>
              <Col md={3}>
                <div className="medi-logo">
                  <Link to="/">
                    <img src={logoImg} alt="site-logo" />
                  </Link>
                </div>
              </Col>
              <Col md={9}>
                <div className="medi-menu">
                  <ul>
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <Link to="/pages">pages</Link>
                    </li>
                    <li>
                      <Link to="/department">department</Link>
                    </li>
                    <li>
                      <Link to="/service-and-treatment">
                        service & Treatments
                      </Link>
                    </li>
                    <li>
                      <Link to="/way-to-give">ways to give</Link>
                    </li>
                    <li>
                      <Link to="/make-an-appoinment">make an appointment</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
