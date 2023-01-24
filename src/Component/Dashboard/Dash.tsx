import React from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import "./Dash.scss";

export const Dash = () => {
  return (
    <>
      <div className="dash-page">
        <Row>
          <div className="d-card-grp">
            <Card>
              <Card.Body>
                <Card.Title>Todays Patients</Card.Title>
                <Card.Text>
                  <Row>
                    <Col md={6}>Icon</Col>
                    <Col md={6}>231</Col>
                  </Row>
                  <Row>
                    <p>18% Higher Then Last Month</p>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Appointments</Card.Title>
                <Card.Text>
                  <Row>
                    <Col md={6}>Icon</Col>
                    <Col md={6}>122</Col>
                  </Row>
                  <Row>
                    <p>21% Higher Then Last Month</p>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Todays Operations</Card.Title>
                <Card.Text>
                  <Row>
                    <Col md={6}>Icon</Col>
                    <Col md={6}>28</Col>
                  </Row>
                  <Row>
                    <p>37% Higher Then Last Month</p>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Online Appointment</Card.Title>
                <Card.Text>
                  <Row>
                    <Col md={6}>Icon</Col>
                    <Col md={6}>42</Col>
                  </Row>
                  <Row>
                    <p>10% Higher Then Last Month</p>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Row>
        <div className="tody-apt">
          <Row>
            <Col md={8}>
              <div className="today-tbl">
                <h4>Todays Appointment</h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Patient Name</th>
                      <th>Gender</th>
                      <th>Last Visit</th>
                      <th>Diseases</th>
                      <th>Report</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>Male</td>
                      <td>12/05/2016	</td>
                      <td>Cholera</td>
                      <td>pdf</td>
                      <td>button</td>
                    </tr>
                    <tr>
                    <td>1</td>
                      <td>John Doe</td>
                      <td>Male</td>
                      <td>12/05/2016	</td>
                      <td>Cholera</td>
                      <td>pdf</td>
                      <td>button</td>
                    </tr>
                    <tr>
                    <td>1</td>
                      <td>John Doe</td>
                      <td>Male</td>
                      <td>12/05/2016	</td>
                      <td>Cholera</td>
                      <td>pdf</td>
                      <td>button</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col md={4}>
              <div className="pt-groups">
                <h4>Patients Group</h4>
                <Row>
                  <Col md={2}>
                    <span>C</span>
                  </Col>
                  <Col md={6}>
                    <p>Cholesterol</p>
                  </Col>
                  <Col md={4}>5 Pat</Col>
                </Row>
                <Row>
                  <Col md={2}>
                    <span>D</span>
                  </Col>
                  <Col md={6}>
                    <p>Diabetic</p>
                  </Col>
                  <Col md={4}>5 Pat</Col>
                </Row>
                <Row>
                  <Col md={2}>
                    <span>L</span>
                  </Col>
                  <Col md={6}>
                    <p>Low Blood</p>
                  </Col>
                  <Col md={4}>5 Pat</Col>
                </Row>
                <Row>
                  <Col md={2}>
                    <span>H</span>
                  </Col>
                  <Col md={6}>
                    <p>Hypertension</p>
                  </Col>
                  <Col md={4}>5 Pat</Col>
                </Row>
                <Row>
                  <Col md={2}>
                    <span>M</span>
                  </Col>
                  <Col md={6}>
                    <p>Malaria</p>
                  </Col>
                  <Col md={4}>5 Pat</Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="ds-btm-sec">
          <Row>
            <Col md={4}>
              <div className="todo-list">
                <h4>Todo List</h4>
                <p>todo list here....</p>
              </div>
            </Col>
            <Col md={4}>
            <div className="doct-list">
              <h4>Doctors List</h4>
            <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Doctor Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dr Anand</td>
                      <td>Male</td>
                    </tr>
                    <tr>
                    <td>1</td>
                      <td>Dr Aneeta</td>
                      <td>FeMale</td>
                    </tr>
                    <tr>
                    <td>1</td>
                      <td>Dr Jhon</td>
                      <td>Male</td>
                    </tr>
                  </tbody>
                </Table>
            </div>
            </Col>
            <Col md={4}>
            <div className="pt-list">
              <h4>Number Of Patients</h4>
              Graph here...
            </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
