import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logoImg from "../../assets/site-logo.jpg";

const Header = () => {
  return (
    <>
      <div className="medi-header">
        <div className="main-page-wr">
          <div className="header-content">
            <div className="medi-logo">
                <Link to="/"><img src={logoImg} alt="site-logo"/></Link>
            </div>
            <div className="medi-menu">
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/pages">pages</Link></li>
                    <li><Link to="/department">department</Link></li>
                    <li><Link to="/service-and-treatment">service & Treatments</Link></li>
                    <li><Link to="">ways to give</Link></li>
                    <li><Link to="/make-an-appoinment">make an appointment</Link></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
