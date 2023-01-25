import { useFormik } from "formik";
import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LoginValidation } from "../../Validation/LoginValidation";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (values,{ resetForm }) => {
      if(values.email === "admin@gmail.com" && values.password === "123456"){
        localStorage.setItem("token","12sdfs54s13df45R$#WE");
        navigate("/dashboard");
        resetForm();
      }
    },
  });
  return (
    <>
      <div className="log-form-page">
        <Container>
          <Row>
            <div className="lg-form">
              <h3>Login here</h3>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="Password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Button variant="dark" type="submit">Login</Button>
                </Form.Group>
              </Form>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
