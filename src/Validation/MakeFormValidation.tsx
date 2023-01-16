import * as Yup from "yup";

export const MakeFormValidation =  Yup.object({
    fullName: Yup.string()
      .required("Required*"),
      email: Yup.string()
      .required("Required*"),
      mobileNumber: Yup.string()
      .required("Required*"),
      date: Yup.string()
      .required("Required*"),
      time: Yup.string()
      .required("Required*"),
      problem: Yup.string()
      .required("Required*"),
  })