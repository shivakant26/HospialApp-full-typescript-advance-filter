import React from "react";
import "./Footer.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaWifi, FaVuejs } from "react-icons/fa";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="main-page-wr">
          <div className="footer-inner">
            <div className="ft-img"></div>
            <div className="out-service">
              <h5>outpatient services</h5>
              <ul>
                <li>Behavioral health</li>
                <li>cancer program medical</li>
                <li>cardiac rehab</li>
                <li>diagnosic cardiology</li>
                <li>GCM-suburban imaging</li>
                <li>outpatient Surgery center</li>
                <li>radiology</li>
                <li>sleep disorders center</li>
              </ul>
            </div>
            <div className="in-the-news">
              <h5>in the news</h5>
              <div className="stamping-part">
                <div className="img-part">
                  <img
                    src={require("./../../assets/group-of-doc.jpeg")}
                    alt="group-img"
                  />
                </div>
                <div className="content-part">
                  <h6>stampin out pain</h6>
                  <p>
                    Aching hands? Don't let athritis
                    <br /> keep you from faorite...
                  </p>
                </div>
              </div>
              <div className="chil-hm">
                <div className="img-part">
                  <img
                    src={require("./../../assets/small-doc.jpeg")}
                    alt="group-img"
                  />
                </div>
                <div className="content-part">
                  <h6>Children's Home sefety</h6>
                  <p>
                    As you prepare for festive gath
                    <br /> erings, it's a good idea...
                  </p>
                </div>
              </div>
            </div>
            <div className="other-location">
              <h5>other location</h5>
              <ul>
                <li>MedicAid California</li>
                <li>MedicAid Alaska</li>
                <li>MedicAid Oklahoma</li>
                <li>MedicAid Arizona</li>
                <li>MedicAid Michigan</li>
                <li>MedicAid New York</li>
                <li>MedicAid Canada</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <div className="copyright">
            <p>
              @ Copyright 2023. Made with <AiOutlineHeart /> by{" "}
              <Link to="">shiva1542</Link>
            </p>
          </div>
          <div className="social-icon">
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaWifi />
              </li>
              <li>
                <FaVuejs />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;