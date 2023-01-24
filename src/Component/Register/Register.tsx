import React, { Component, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./Register.scss";

interface IFirstStep {
    firstName:string,
    lastName:string
}
interface ISecondStep {
    email:string,
    password:string
}
interface IThirdStep{
  phone:any,
  city:string
}

const Register = () => {
  const [firstStep, setFirstStep] = useState<boolean>(true);
  const [secondStep, setSecondStep] = useState<boolean>(false);
  const [thirdStep, setThirdStep] = useState<boolean>(false);
  const [fsData , setFsData] = useState<IFirstStep>({
    firstName:"",
    lastName:""
  })
  const [seData , setSeData] = useState<ISecondStep>({
    email:"",
    password:""
  })
  const [registerData , setRegisterData] = useState<IThirdStep>({
    phone:null,
    city:""
  })
 
  const nextstep = (e:any, val:string) =>{
    switch(val){
      case "sv_one" :
        setSecondStep(true);
        setFirstStep(false);
        break;
        case "sv_two" :
          setSecondStep(false);
          setThirdStep(true);
        break;
        default:
            return null ; 
    }
  }
  const previous = (e:any,val:string) =>{
    switch(val){
      case "p_second" :
        setSecondStep(false);
        setFirstStep(true);
        break;
        case "p_third" :
          setThirdStep(false);
          setSecondStep(true);
        break;
        default:
            return null ; 
    }
  }

  const registerUser = () =>{
    const temp_data = {...fsData,...seData};
    const full_data = {...registerData , ...temp_data}
    console.log(123456,full_data)
  }
  return (
    <>
      <div className="register-page">
        <Container>
          <div className="regs-form">
            <h3>For New User</h3>
            <Row>
              <div className="stteper">
                <div className={firstStep ? "active step-first" : "step-first"}>
                  1
                </div>
                <div className={secondStep ? "active step-two" : "step-two"}>2</div>
                <div className={thirdStep ? "active step-three":"step-three"}>3</div>
              </div>
            </Row>
            {firstStep ? (
              <>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={fsData.firstName}
                    onChange={(e)=>setFsData({...fsData,firstName:e.target.value})}
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={fsData.lastName}
                    onChange={(e)=>setFsData({...fsData,lastName:e.target.value})}
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="btn-ctrl">
                    <Button onClick={(e)=>previous(e,"p_first")}>previous</Button>
                    <Button onClick={(e)=>nextstep(e,"sv_one")}>next</Button>
                  </div>
                </Form.Group>
              </>
            ) : null}
            {secondStep && secondStep ? (
              <>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={seData.email}
                    onChange={(e)=>setSeData({...seData,email:e.target.value})}
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={seData.password}
                    onChange={(e)=>setSeData({...seData,password:e.target.value})}
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="btn-ctrl">
                    <Button onClick={(e)=>previous(e,"p_second")}>Previous</Button>
                    <Button onClick={(e)=>nextstep(e,"sv_two")}>next</Button>
                  </div>
                </Form.Group>
              </>
            ) : null}
            {thirdStep && thirdStep ? (
              <>
                <Form.Group className="mb-3" controlId="mobileNo">
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                    value={registerData.phone}
                    onChange={(e)=>setRegisterData({...registerData, phone:e.target.value})}
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    value={registerData.city}
                    onChange={(e)=>setRegisterData({...registerData,city:e.target.value})}
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="btn-ctrl">
                    <Button onClick={(e)=>previous(e,"p_third")}>previous</Button>
                    <Button onClick={registerUser}>Register</Button>
                  </div>
                </Form.Group>
              </>
            ) : null}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Register;
