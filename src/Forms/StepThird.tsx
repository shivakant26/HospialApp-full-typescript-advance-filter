import { useFormik } from "formik";
import React from "react";
import { Form , Button} from "react-bootstrap";
import { StepThirdVal } from "../Validation/RegValidation";

const StepThird = (props:any) => {
  const formik = useFormik({
    initialValues: {
      phone: "",
      city: "",
    },
    validationSchema: StepThirdVal,
    onSubmit: (values, { resetForm }) => {
      if (values) {
        props.registerUser(values);
      }
      resetForm();
    },
  });
  return (
    <>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="mobileNo">
        <Form.Label>Mobile No</Form.Label>
        <Form.Control
          type="text"
          placeholder="Mobile Number"
          name="phone"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="error">{formik.errors.phone}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="City"
          name="city"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="error">{formik.errors.city}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <div className="btn-ctrl">
          <Button onClick={(e) => props.previous(e, "p_third")}>previous</Button>
          <Button type="submit">Register</Button>
        </div>
      </Form.Group>
      </Form> 
    </>
  );
};

export default StepThird;
