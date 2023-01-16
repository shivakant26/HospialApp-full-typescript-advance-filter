import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../Redux/store";
import { getAllPost } from "../../Redux/authReducer";
import "./MakeAppoitment.scss";
import { useFormik } from "formik";
import { MakeFormValidation } from "../../Validation/MakeFormValidation";

const MakeAppoinment = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getResponse = useSelector((state) => state);
  console.log(123456, getResponse);

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const formik = useFormik({
    initialValues: {
      sirName:'',
      fullName: "",
      email: "",
      mobileNumber: "",
      date: "",
      time: "",
      problem: "",
    },
    validationSchema: MakeFormValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // setFormState(values);
    },
  });
  const handleRadioButtons = (e:any) => {
    formik.values.sirName = e.target.value
  } 
  return (
    <>
      <div className="make-appoint">
        <Container>
          <Row>
            <Col md={8}>
              <div className="form-section">
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md={4}>
                      <Row>
                        <Col>
                          <Form.Check
                            inline
                            label="Mr"
                            name="sirName"
                            type="radio"
                            value="Mr"
                            onChange={(e) => handleRadioButtons(e)}
                          />
                        </Col>
                        <Col>
                          <Form.Check
                            inline
                            label="Mrs"
                            name="sirName"
                            type="radio"
                            value="Mrs"
                            onChange={e => handleRadioButtons(e)}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={8}>
                      <Form.Group className="mb-4">
                        <Form.Control
                          type="text"
                          placeholder="Full Name*"
                          name="fullName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.fullName}
                        />

                        {formik.touched.fullName && formik.errors.fullName ? (
                          <div className="text-danger">
                            {formik.errors.fullName}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-4">
                        <Form.Control
                          type="email"
                          placeholder="email*"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />

                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-danger">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-4">
                        <Form.Control
                          type="text"
                          placeholder="Mobile Number"
                          name="mobileNumber"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.mobileNumber}
                        />
                        
                          {formik.touched.mobileNumber &&
                          formik.errors.mobileNumber ? (
                            <div className="text-danger">
                              {formik.errors.mobileNumber}
                            </div>
                          ) : null}
           
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-4">
                        <Form.Control
                          type="date"
                          placeholder="dd.mm.yyyy"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.date}
                          name="date"
                        />
                        {formik.touched.date && formik.errors.date ? (
                          <div className="text-danger">
                            {formik.errors.date}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-4">
                        <Form.Control
                          type="time"
                          placeholder="9am - 6pm"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.time}
                          name="time"
                        />

                        {formik.touched.time && formik.errors.time ? (
                          <div className="text-danger">
                            {formik.errors.time}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-4">
                        <Form.Control
                          as="textarea"
                          placeholder="Your Problem summary"
                          name="problem"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.problem}
                        />

                        {formik.touched.problem && formik.errors.problem ? (
                          <div className="text-danger">
                            {formik.errors.problem}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <Col
                          md={12}
                          style={{ textAlign: "left", marginBottom: "10px" }}
                        >
                          <input type="checkbox" />
                          <span>
                            i agree Your <Link to="">Terms of Services</Link>{" "}
                            and <Link to="">Privacy Policy .</Link>
                          </span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button type="submit">Submit</Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col md={4}>
              <div className="form-text">
                <h2>Make an Appoiment</h2>
                <p>
                  Please send us email here:
                  <br />
                  <Link to="">help@dentro.com</Link> or fill out this form and
                  <br />
                  we'll get back with you in next 24hr
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MakeAppoinment;
