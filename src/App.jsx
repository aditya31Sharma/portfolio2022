import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Button, Container, Row, Col } from "react-bootstrap";

import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import UXdesign from "./pages/UXdesign";
import Programming from "./pages/Programming";
import Contactme from "./pages/Contactme";

import Loader from "./components/Loader";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <Loader/> */}
      <BrowserRouter>
      <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="myworks" element={<Works />} />
          <Route path="about" element={<About />} />
          <Route path="uxdesign" element={<UXdesign />} />
          <Route path="programming" element={<Programming />} />
          <Route path="contactme" element={<Contactme />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};
export default App;
