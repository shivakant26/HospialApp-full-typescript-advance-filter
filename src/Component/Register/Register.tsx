import React, { Component, useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import StepFirst from "../../Forms/StepFirst";
import StepSecond from "../../Forms/StepSecond";
import StepThird from "../../Forms/StepThird";
import { authRegister } from "../../Redux/authReducer";
import { AppDispatch } from "../../Redux/store";
import "./Register.scss";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

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
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [firstStep, setFirstStep] = useState<boolean>(true);
  const [secondStep, setSecondStep] = useState<boolean>(false);
  const [thirdStep, setThirdStep] = useState<boolean>(false);
  const [fsData , setFsData] = useState({})
  const [seData , setSeData] = useState({})
  const [registerData , setRegisterData] = useState({})
  const reg_resp = useSelector((state:any)=>state?.auth)
  console.log(321,reg_resp)
 
  const nextstep = (e:any, val:string) =>{
    var data = val;
    switch(e){
      case "sv_one" :
        setFsData(data);
        setSecondStep(true);
        setFirstStep(false);
        break;
        case "sv_two" :
          setSeData(data);
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
            return null; 
    }
  }

  const registerUser = (val:any) =>{
    const temp_data = {...fsData,...seData};
    const full_data = {...val , ...temp_data}
    dispatch(authRegister(full_data));
  }

  useEffect(()=>{
    if(reg_resp?.status === "success"){
      toast.success("Register Data successfully")
      navigate("/login");
    }
  },[reg_resp])

  return (
    <>
      <div className="register-page">
        <Container>
          <div className="regs-form">
            <h3>For New User</h3>
            <Row>
              <div className="stteper">
                <div className={firstStep ? "active step-first" : "step-first"}>1</div>
                <div className={secondStep ? "active step-two" : "step-two"}>2</div>
                <div className={thirdStep ? "active step-three":"step-three"}>3</div>
              </div>
            </Row>
            {firstStep ? (
              <>
                <StepFirst previous={previous} nextstep={nextstep}/>
              </>
            ) : null}
            {secondStep && secondStep ? (
              <>
              <StepSecond previous={previous} nextstep={nextstep}/>
              </>
            ) : null}
            {thirdStep && thirdStep ? (
              <>
                <StepThird previous={previous} registerUser={registerUser}/>
              </>
            ) : null}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Register;
