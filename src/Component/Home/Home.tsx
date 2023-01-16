import React, { useState } from "react";
import "./Home.scss";
import Slider from "react-slick";
import ImgFirst from "../../assets/banner-first.jpg";
import ImgSecond from "../../assets/banner-two.jpg";
import ImgThird from "../../assets/banner-three.jpg";
import TeethCheck from "../../assets/teeth-check.jpg";
import { Link } from "react-router-dom";
import { RiFirstAidKitFill, RiHeartPulseFill } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import { Col, Container, Form, Row } from "react-bootstrap";
import TeethCheckImage from "../../assets/teeth-check-image.jpg";
import DoctorImage from "../../assets/doctor.jpg";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const ourDepartment: Array<string> = [
    "oral exam",
    "digital x-rays",
    "teath cleaning",
    "fillings",
    "procilain crowns",
    "bridges",
    "cosmetic dentistry",
    "teeth whitening",
    "veneers",
    "bonding",
  ];

  return (
    <>
      <div className="main-page">
        <div className="banner-slider-section">
          <div className="banner">
            <Container>
              <Slider {...settings}>
                <div className="banner-item">
                  <img src={ImgFirst} alt="first-img" />
                  <div className="banner-content">
                    <h2>MedicAid Dental care</h2>
                    <p>25 year Exprience. we know a lot about growth</p>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="banner-item">
                  <img src={ImgSecond} alt="second-img" />
                  <div className="banner-content">
                    <h2>MedicAid Dental care</h2>
                    <p>25 year Exprience. we know a lot about growth</p>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="banner-item">
                  <img src={ImgThird} alt="third-img" />
                  <div className="banner-content">
                    <h2>MedicAid Dental care</h2>
                    <p>25 year Exprience. we know a lot about growth</p>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="banner-item">
                  <img src={ImgSecond} alt="fourth-img" />
                  <div className="banner-content">
                    <h2>MedicAid Dental care</h2>
                    <p>25 year Exprience. we know a lot about growth</p>
                  </div>
                  <div className="overlay"></div>
                </div>
              </Slider>
            </Container>
          </div>
        </div>
        {/* end banner section */}
        <div className="our-section">
          <Container>
            <div className="our-department">
              <Row>
                <Col>
                  <div className="left-col">
                    <div className="teeth-img">
                      <img src={TeethCheck} alt="teeth-check" />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="right-col">
                    <div className="our-dept-section">
                      <h3>our department</h3>
                      <p>
                        We provide general specialty, and cosmetic dental care
                        to nearly a million patients every year. Listed below
                        are some of the sevices we provide our patients:
                      </p>
                      <ul>
                        {ourDepartment.map((item, index) => {
                          return <li>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* end our department section */}
        <div className="service-section">
          <Container>
            <div className="service">
              <h3>Our Services</h3>
              <p>Excellence in Dental Implants and Cosmetic Dentistry</p>
              <div className="dental-card-group">
                <div className="dental-card">
                  <div className="cr-icons">
                    <RiFirstAidKitFill />
                  </div>
                  <h4>Frequent Reviews</h4>
                  <p>
                    test Reiview in order to evaluate if rapid care is needed
                  </p>
                  <Link to="">read more</Link>
                </div>
                <div className="dental-card">
                  <div className="cr-icons">
                    <BsGraphUp />
                  </div>
                  <h4>Frequent Reviews</h4>
                  <p>
                    test Reiview in order to evaluate if rapid care is needed
                  </p>
                  <Link to="">read more</Link>
                </div>
                <div className="dental-card">
                  <div className="cr-icons">
                    <RiHeartPulseFill />
                  </div>
                  <h4>Frequent Reviews</h4>
                  <p>
                    test Reiview in order to evaluate if rapid care is needed
                  </p>
                  <Link to="">read more</Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* end card section */}
        <div className="way-to-section">
          <Container>
            <div className="way-to">
              <Row>
                <Col md={5}>
                  <div className="form-section">
                    <form>
                      <Row>
                        <Form.Group className="mb-4">
                          <Form.Label>Center or Department</Form.Label>
                          <Form.Select>
                            <option>All Center & Development</option>
                            <option>1</option>
                            <option>1</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="mb-4">
                          <Form.Label>Dental Service Type</Form.Label>
                          <Form.Select>
                            <option>Teeth Cleaning</option>
                            <option>1</option>
                            <option>1</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="mb-4">
                          <Form.Label>Location</Form.Label>
                          <Form.Select>
                            <option>All Location</option>
                            <option>1</option>
                            <option>1</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="mb-4">
                          <Form.Label>Language</Form.Label>
                          <Form.Select>
                            <option>All Language</option>
                            <option>Hindi</option>
                            <option>English</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="mb-4">
                          <Form.Label>Gender</Form.Label>
                          <Row>
                            <Col md={4}>
                            <Form.Check
                              type="radio"
                              name="gender"
                              value="no preference"
                              style={{ paddingRight: "10px" }}
                            />
                            No Preference
                            </Col>
                            <Col md={4}>
                            <Form.Check
                              type="radio"
                              name="gender"
                              value="male"
                              style={{ paddingRight: "10px" }}
                            />
                            Male
                            </Col>
                            <Col md={4}>
                            <Form.Check
                              type="radio"
                              name="gender"
                              value="female"
                              style={{ paddingRight: "10px" }}
                            />
                            FeMale
                            </Col>
                          </Row>
                        </Form.Group>
                      </Row>
                      <button>
                        <TbDental /> find a Dentist
                      </button>
                    </form>
                  </div>
                </Col>
                <Col md={7} className="way-to-image">
                  <div className="group-image">
                    <Row>
                      <span className="img-frist">
                        <img src={DoctorImage} alt="image1" />
                      </span>
                    </Row>
                    <Row>
                      <span className="img-second">
                        <img src={TeethCheckImage} alt="image2" />
                      </span>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* end way to section */}
        <div className="refer-section">
          <Container>
            <div className="refer-content">
              <h2>Refer a Friend</h2>
              <p>& you both receive $50 Gift Card</p>
              <div className="timer">
                <div className="days common-style">10</div>
                <div className="hrs common-style">07</div>
                <div className="min common-style">34</div>
                <div className="sec common-style">54</div>
              </div>
              <button className="ct-btn">
                <TbDental /> contact us
              </button>
            </div>
            <div className="overlay"></div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
