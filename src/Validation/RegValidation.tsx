import * as Yup from "yup";

export const StepFirstVal =  Yup.object({
    firstName: Yup.string()
      .required("Required*"),
      lastName: Yup.string()
      .required("Required*"),
  })

  export const StepSecondVal =  Yup.object({
      email: Yup.string()
      .required("Required*"),
      password: Yup.string()
      .required("Required*"),
     
  })

  export const StepThirdVal =  Yup.object({
      phone: Yup.string()
      .required("Required*"),
      city: Yup.string()
      .required("Required*"),
  })