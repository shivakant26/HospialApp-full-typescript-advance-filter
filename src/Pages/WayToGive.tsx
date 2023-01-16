import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllData } from "../Redux/authReducer";
import { AppDispatch } from "../Redux/store";

const WayToGive = () => {
  const [list, setList] = useState([]);
  const [search ,setSearch] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const getResponse = useSelector((state: any) => state?.auth);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  useEffect(() => {
    if (getResponse.status === "succuss") {
      setList(getResponse?.getdata?.data);
    }
  }, [getResponse , search]);

  const handleChange = (e:any) =>{
    let searchText = e.target.value;
    if(searchText.length > 0){
        setSearch(e.target.value)
    }else{
        setSearch("");
    }
    if(search===""){
        setList(list)
    }
  } 
  const filterRecord = () =>{
   const filterd =  list?.filter((element:any)=>{
    return element.name.toLowerCase().includes(search.toLowerCase()) || 
    element.createdAt.toLowerCase().includes(search.toLowerCase())
   })
    setList(filterd)
  }

console.log(123456,list)
  return (
    <>
    <Container>
        <Row>
            <input type="search" onChange={(e)=>handleChange(e)}/>
            <Button onClick={filterRecord}>filter</Button>
        </Row>
      {list ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>createdAt</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item :any, index) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.createdAt}</td>
                    <td><img src={item.avatar} alt="images"/></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        "Record Not Found"
      )}
      </Container>
    </>
  );
};

export default WayToGive;
