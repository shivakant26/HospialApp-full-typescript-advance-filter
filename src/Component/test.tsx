// this file use only for testing purpose

import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

interface IEmployee { 
  empName: string; 
  code: number; 
}



const Test = () => {
  // data type declearation
  let title: string = "Wel Come to Typescript world!";
  let active :boolean = false;
  let rollNo : number = 30;
  let car : any = "audi";
  let empName : undefined = undefined;
  let carNumber : null = null;

  // function here
  const hellow = ():any =>{
    console.log("Hellow Typescript");
  }
  // function with argument
  const add = (a:number , b:number) =>{
    return a+b;
  }
  // 1. number type function
  let mul = function(x: number, y: number) : number{
    return x * y;
  }
  // 2. string type function
  let welcomeText = function(x:string) : string {
    return x
  }

  // generic type
    function users<T>(data:T){
      return data
    }


  // interface with object
  let employee : IEmployee = {
    empName : "jhon",
    code : 20
  }

  // Array
  let fruits : string[] = ["apple","mango","papaya"]
  
  // make generic array with tupple
  let carCompany : Array<string> = ["alto"]
  // make multi type array decleration
  let fruitsfirst : Array<string | number | boolean>;
  fruitsfirst = ["ceeku","orange"]


  // tuple type
  let company  : [number , string] = [801,"yuvasoft"];

  // enum
  enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }
  function getMedia(mediaName: string){
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Newsletter;
    }
 }
 let mediaType = getMedia('Forbes');


//  Union
let code : (number | string | boolean);
code = 45;
// code = "sdfsd"
// code = true;
function displayType(code:(string | number | boolean)){
    if(typeof(code) === 'number'){
      return "code is number"
    }else if(typeof(code) === "string"){
      return "code is string"
    }else if(typeof(code) === "boolean"){
      return "code is Boolean"
    }
}

// void
function sayHi():void{
  console.log("hellow everyone how are you")
}
let speech : void = sayHi();
console.log("speech",speech)

// rest operator with function
function Greeting(greet:string, ...name:string[]){
    return greet + " " + name.join(",");
}

  return (
    <>
    <div className="App">
      <h1>{title}</h1>
      <p>{hellow()}</p>
      <p>Sum is = {add(10,20)}</p>
      <p>{employee.empName} and {employee.code}</p>
      <p>{users(45)}</p>
      <div>
        {
          fruits.map((item:any,key:number)=>
            <p key={key}>{item}</p>
          )
        }
      </div>
      <p>{company}</p>
      <p>{mediaType}</p>
      <p>{code}</p>
      <p>{displayType(false)}</p>
      <strong>{mul(10,20)}</strong>
      <h4>{welcomeText("Function type String")}</h4>
      <p>{Greeting("Hellow","jhon","Bob","opex")}</p>
    </div>
    </>
    
  );
};

export default Test;
