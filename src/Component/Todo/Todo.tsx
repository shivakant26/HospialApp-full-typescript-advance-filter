import React, { useState } from "react";
import "./Todo.scss";
import { IPatient } from "../../Interface/Patient";

const Todo = () =>{

  let title: string = "Typescript App";
  let form: string = "Patient Form";
  let tableTitle : string = "Patient History";

  const [data, setData] = useState<IPatient>({
    patientName: "",
    ptProblem: "",
    age:undefined
  });
  const [list, setList] = useState<IPatient[]>([]);

  const AddWish = (e: any) => {
    e.preventDefault();
    if(data.patientName === "" && data.ptProblem === ""){
        return false;
    }
    console.log("delete_id",data.id)
    if(data.id){
        list.splice(data.id-1,1,data)
    }else{
        setList([...list, data]);
    }
    setData({patientName:"",ptProblem:"",age:""})
  };

  const edit = (index:number) =>{
    let id = index+1;
    let current_object = list[id-1];
    console.log("edit",current_object)
    setData({
        id:id,
        patientName:current_object.patientName,
        ptProblem:current_object.ptProblem,
        age:current_object.age
    })
  }
  const trash = (index:number) =>{
    var array = [...list]
    if (index !== -1) {
        array.splice(index, 1);
        setList(array);
      }
    }
    return(
        <>
        <div className="todo-page">
          <div className="main-page-wr">
          <div className="header">
            <h1>{title}</h1>
          </div>
          <div className="content-body">
            <div className="left-part">
              <h2>{form}</h2>
              <form>
                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Patient Name"
                    value={data.patientName}
                    onChange={(e) =>
                      setData({ ...data, patientName: e.target.value })
                    }
                  />
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Patient Problem"
                    value={data.ptProblem}
                    onChange={(e) =>
                      setData({ ...data, ptProblem: e.target.value })
                    }
                  />
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Patient Age"
                    value={data.age}
                    onChange={(e) =>
                      setData({ ...data, age : e.target.value })
                    }
                  />
                </div>
                <div className="form-field">
                  <button className="add-btn" onClick={AddWish}>
                    Add Problem
                  </button>
                </div>
              </form>
            </div>
            <div className="right-part">
                <h2>{tableTitle}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Petient Name</th>
                    <th>Problem</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {list ? (
                    <>
                      {list.map((item: IPatient, index: number) => {
                        return (
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.patientName}</td>
                            <td>{item.ptProblem}</td>
                            <td>{item.age}</td>
                            <td>
                                <button onClick={()=>edit(index)}>edit</button>
                                <button onClick={()=>trash(index)}>delete</button>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  ) : (
                    "empty"
                  )}
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </div>
        
        </>
    )
}
export default Todo;