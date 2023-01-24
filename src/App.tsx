import React, { Suspense, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
// import HomePage from "./Pages/HomePage";
import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceAndTreatment from "./Pages/ServiceAndTreatment";
import Footer from "./Component/Footer/Footer";
import { Spinner } from "react-bootstrap";

const HomePage = React.lazy(() => import("./Pages/HomePage"));
const MakeAppoinmentPage = React.lazy(() => import("./Pages/MakeAppoinment"));
const WayToGive = React.lazy(() => import("./Pages/WayToGive"));
const PostPage = React.lazy(() => import("./Pages/PostPage"));
const SinglePost = React.lazy(() => import("./Pages/SinglePost"));
const Login = React.lazy(()=>import("./Component/Login/Login"));
const Register = React.lazy(()=>import("./Component/Register/Register"));

const App = () => {

  return (
    <>
    <div className="App">
      <Router>
      <Header />
      <React.Suspense fallback={<div>
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
      </div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service-and-treatment" element={<ServiceAndTreatment />} />
          <Route path="/make-an-appoinment" element={<MakeAppoinmentPage />} />
          <Route path="/way-to-give" element={<WayToGive />} />
          <Route path="/all-post/" element={<PostPage />} />
          <Route path="/single-post/:id" element={<SinglePost />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<div>Page Not found</div>} />
        </Routes>
        <Footer />
        </React.Suspense>
      </Router>
    </div>
    </>
    
  );
};

export default App;
