import * as Yup from "yup";

export const LoginValidation =  Yup.object({
    email: Yup.string()
      .required("Required*"),
    password: Yup.string()
      .required("Required*"),
  })