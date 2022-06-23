import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Cross,
  LinkedinBoxFill,
  Envelope,
  BehanceFill,
  DribbbleFill,
  InstagramFill,
  FacebookFill,
  WhatsappFill,
} from "akar-icons";

import { sociallinks } from "../data";
import Logo from "../assets/images/Logo.svg";
import Menuicon from "../assets/images/menu.svg";
import Connecticon from "../assets/images/connecticon.svg";

import { Navbar, Container } from "react-bootstrap";
const Navigationbar = () => {
  const [navmenu, setNavmenu] = useState(false);
  const [connectmenu, setConnectmenu] = useState(false);
  const [fixednav, setFixednav] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFixednav(true), 3000);
    const timer2 = setTimeout(() => window.scrollTo(0, 0), 2000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <>
      <div className={`navbar-smaller-screens ${navmenu && "show"}`}>
        <button
          type="button"
          className="menu-icon-close"
          onClick={() => {
            setNavmenu(false);
          }}
        >
          <img src={Menuicon} alt="Menu" />
        </button>
        <div className="links-container smaller-screen-nav">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/myworks" className="link">
            Have a glance at my work?
          </Link>
          <Link to="/about" className="link">
            Wanna know more about me?
          </Link>
          <Link to="/contactme" className="link">
            Contact me
          </Link>
        </div>
      </div>

      <div className={`connectbar-smaller-screens ${connectmenu && "show"}`}>
        <button
          type="button"
          className="connect-icon-close"
          onClick={() => {
            setConnectmenu(false);
          }}
        >
          <Cross strokeWidth={2} size={24} className="close-icon" />
        </button>
        <div className="links-container smaller-screen-nav">
          <a href={sociallinks[0].link} className="link" target="blank">
            <LinkedinBoxFill size={24} className="link-icon" />
            <p>{sociallinks[0].label}</p>
          </a>
          <a href={sociallinks[1].link} className="link" target="blank">
            <Envelope size={24} className="link-icon" />
            <p>{sociallinks[1].label}</p>
          </a>
          <a href={sociallinks[2].link} className="link" target="blank">
            <BehanceFill size={24} className="link-icon" />
            <p>{sociallinks[2].label}</p>
          </a>
          <a href={sociallinks[3].link} className="link" target="blank">
            <DribbbleFill size={24} className="link-icon" />
            <p>{sociallinks[3].label}</p>
          </a>
          <a href={sociallinks[4].link} className="link" target="blank">
            <InstagramFill size={24} className="link-icon" />
            <p>{sociallinks[4].label}</p>
          </a>
          <a href={sociallinks[5].link} className="link" target="blank">
            <FacebookFill size={24} className="link-icon" />
            <p>{sociallinks[5].label}</p>
          </a>
          <a href={sociallinks[6].link} className="link" target="blank">
            <WhatsappFill size={24} className="link-icon" />
            <p>{sociallinks[6].label}</p>
          </a>
        </div>
      </div>

      <nav className={`${fixednav &&'fixednav'}`}>
        <Container className="container">
          <button
            type="button"
            className="menu-icon"
            onClick={() => {
              setNavmenu(true);
            }}
          >
            <img src={Menuicon} alt="Menu" />
          </button>
          <Navbar.Brand className="logo">
            <Link to="/" className="logo-link">
              <img src={Logo} className="logo-img" alt="Portfolio" />
            </Link>
          </Navbar.Brand>
          <button
            type="button"
            className="connect-icon"
            onClick={() => {
              setConnectmenu(true);
            }}
          >
            <img src={Connecticon} alt="Connect" />
          </button>
          <div className="links-container">
            <Link to="/myworks" className="link">
              Have a glance at my work?
            </Link>
            <Link to="/about" className="link">
              Wanna know more about me?
            </Link>
            <Link to="/contactme" className="link">
              Contact me
            </Link>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navigationbar;
