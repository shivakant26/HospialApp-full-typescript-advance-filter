import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllPost } from "../Redux/authReducer";
import { AppDispatch } from "../Redux/store";
import postImage from "../assets/small-doc.jpeg";
import { useNavigate } from "react-router-dom";
import Panigation from "../Utils/Panigation";

const PostPage = () => {
  const [allPost, setAllPost] = useState([]);
  const [showPerPage , setShowPerPage] = useState(4);
    const [panigation , setPanigation] = useState({
        start:0,
        end :showPerPage
    })
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const allpost = useSelector((state: any) => state.auth.getallpost);

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  useEffect(() => {
    if (allpost.status === 200) {
      setAllPost(allpost?.data?.posts);
    }
  }, []);

  const readMore = (id:number) =>{
    navigate(`/single-post/${id}`);
  }

  const onPanigationChange =(start:number ,end:number)=>{
    setPanigation({start:start, end:end})
}
  return (
    <>
      <div className="all-post">
        <Container fluid>
          <div className="post-card">
            {allPost ? (
              <>
                {allPost?.slice(panigation.start, panigation.end)?.map((item: any, indext: number) => {
                  return (
                    <Card className="pt-card">
                      <Card.Img variant="top" src={postImage} alt="post-image"/>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                         {item.body}
                        </Card.Text>
                        <Button variant="primary"
                        onClick={()=>readMore(item.id)}
                        >read more</Button>
                      </Card.Body>
                    </Card>
                  );
                })}
              </>
            ) : (
              "no"
            )}
          </div>
        </Container>
        <Panigation 
            showPerPage={showPerPage}
            onPanigationChange={onPanigationChange}
            total={allpost?.data?.posts?.length}
            panigation={panigation}
            onPageChange={showPerPage}
            />
      </div>
    </>
  );
};

export default PostPage;
