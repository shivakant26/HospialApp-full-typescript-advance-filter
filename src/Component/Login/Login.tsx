import React from "react";
import { Container, Row ,Form, Button} from "react-bootstrap";
import "./Login.scss";

const Login = () => {
  return (
    <>
    <div className="log-form-page">
      <Container>
        <Row>
        <div className="lg-form">
        <h3>Login here</h3>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="dark">Login</Button>
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
