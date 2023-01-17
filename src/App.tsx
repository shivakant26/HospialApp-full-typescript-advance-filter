import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceAndTreatment from "./Pages/ServiceAndTreatment";
import Footer from "./Component/Footer/Footer";
import MakeAppoinmentPage from "./Pages/MakeAppoinment";
import WayToGive from "./Pages/WayToGive";
import LoginPage from "./Pages/LoginPage";

const App = () => {

  return (
    <>
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service-and-treatment" element={<ServiceAndTreatment />} />
          <Route path="/make-an-appoinment" element={<MakeAppoinmentPage />} />
          <Route path="/way-to-give" element={<WayToGive />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </>
    
  );
};

export default App;
