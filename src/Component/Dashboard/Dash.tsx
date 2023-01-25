import React from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import "./Dash.scss";
import Doc from "../../assets/small-doc.jpeg";
import {FaRegFilePdf} from 'react-icons/fa';
import { Link } from "react-router-dom";
import PDF from "../../assets/document/doc.pdf";

export const Dash = () => {
  const doctors: Array<object> = [
    { id: 1, doc_name: "Dr Jhon", status: "active" },
    { id: 2, doc_name: "Dr Rathi", status: "inactive" },
    { id: 3, doc_name: "Dr Bhargava", status: "active" },
    { id: 4, doc_name: "Dr Padmesh", status: "active" },
  ];
  const toAppoinment: Array<object> = [
    {
      id: 1,
      patientName: "mukesh",
      gender: "male",
      visit_date: "12/01/2023",
      disease: "feaver",
      pdf: PDF
    },
    {
      id: 2,
      patientName: "trisha",
      gender: "female",
      visit_date: "15/01/2023",
      disease: "suger",
      pdf: PDF
    },
    {
      id: 3,
      patientName: "kamlesh",
      gender: "male",
      visit_date: "22/01/2023",
      disease: "maleriya",
      pdf: PDF
    },
    {
      id: 4,
      patientName: "laxmi",
      gender: "female",
      visit_date: "20/01/2023",
      disease: "dairiya",
      pdf: PDF
    },
    {
      id: 5,
      patientName: "bets",
      gender: "male",
      visit_date: "12/01/2023",
      disease: "eye",
      pdf: PDF
    },
    {
      id: 6,
      patientName: "jhonshon",
      gender: "male",
      visit_date: "12/01/2023",
      disease: "Haija",
      pdf: PDF
    },
  ];
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
                <Table striped bordered hover style={{textTransform:"capitalize"}}>
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
                    {toAppoinment.map((item: any, index: any) => {
                      return (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.patientName}</td>
                          <td>{item.gender}</td>
                          <td>{item.visit_date}</td>
                          <td>{item.disease}</td>
                          <td><Link to={item.pdf} target='_blank'><FaRegFilePdf /></Link></td>
                          <td>
                            <button className="details-btn">details</button>
                          </td>
                        </tr>
                      );
                    })}
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
                    {doctors.map((data: any, index: any) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img src={Doc} alt="doc image" />
                          </td>
                          <td>{data.doc_name}</td>
                          <td>
                            <span
                              className={
                                data.status === "active" ? "green" : "red"
                              }
                            >
                              {data.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col md={4}>
              <div className="pt-list">
                <h4>Number Of Patients</h4>
                graph here...
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
