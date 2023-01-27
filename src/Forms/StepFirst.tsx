import { useFormik } from "formik";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { StepFirstVal } from "../Validation/RegValidation";

const StepFirst = (props: any) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: StepFirstVal,
    onSubmit: (values, { resetForm }) => {
      if(values){
        props.nextstep("sv_one",values);
      }
      resetForm();
    },
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="firstName"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastName"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <div className="btn-ctrl">
            <Button onClick={(e) => props.previous(e, "p_first")}>
              previous
            </Button>
            <Button type="submit">next</Button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
};

export default StepFirst;
