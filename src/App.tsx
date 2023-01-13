import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceAndTreatment from "./Pages/ServiceAndTreatment";
import Footer from "./Component/Footer/Footer";
import MakeAppoinment from "./Pages/MakeAppoinment";

const App = () => {

  return (
    <>
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service-and-treatment" element={<ServiceAndTreatment />} />
          <Route path="/make-an-appoinment" element={<MakeAppoinment />} />

        </Routes>
        <Footer />
      </Router>
    </div>
    </>
    
  );
};

export default App;
