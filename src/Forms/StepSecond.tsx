import { useFormik } from "formik";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { StepSecondVal } from "../Validation/RegValidation";

const StepSecond = (props: any) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: StepSecondVal,
    onSubmit: (values, { resetForm }) => {
      if (values) {
        props.nextstep("sv_two", values);
      }
    },
  });
  return (
    <>
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
      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
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
        <div className="btn-ctrl">
          <Button onClick={(e) => props.previous(e, "p_second")}>
            Previous
          </Button>
          <Button type="submit">next</Button>
        </div>
      </Form.Group>
      </Form>
    </>
  );
};

export default StepSecond;
