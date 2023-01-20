import { debug } from "console";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import SinglePostImg from "../assets/doctor.jpg";
import {FaThumbsUp} from "react-icons/fa";

const SinglePost = () => {
  const { id } = useParams();
  const [singlepost, setSinglePost] = useState([]);
  const allpost = useSelector(
    (state: any) => state?.auth?.getallpost?.data?.posts
  );
console.log(allpost)
  return (
    <>
      <div className="single-post-page">
        <h2>Post Details</h2>
        {allpost
          ?.filter((el: any) => {
            if (el.id === Number(id)) {
              return el;
            }
          })
          .map((obj: any) => {
            return (
              <Container>
                <Row>
                  <Col md={6}>
                    <div className="img-sec">
                        <img style={{width:"100%" , borderRadius:"10px"}} src={SinglePostImg} alt="single-post"/>
                    </div>
                  </Col>
                  <Col md={6} style={{textAlign:"left"}}>
                    <h3 style={{color:"#396db7"}}>{obj.title}</h3>
                    <p style={{lineHeight:"28px"}}>{obj.body}</p>
                    <Row>
                        <Col md={4}>
                        <div style={{position:"relative"}}>
                            <FaThumbsUp style={{fontSize:"25px",color:"#008448"}} />
                            <span className="recation">{obj.reactions}</span>
                        </div>
                        </Col>
                        <Col md={8}>
                            Tags : 
                            {
                                obj?.tags?.map((item:string,index:number)=>{
                                    return(
                                        <span className="tags" key={index}>#{item}</span>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            );
          })}
      </div>
    </>
  );
};

export default SinglePost;
