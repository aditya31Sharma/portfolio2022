import React from "react";
import Me from "../../assets/images/me.png";
import figma from "../../assets/images/figma.svg";
import react from "../../assets/images/react.svg";
import photoshop from "../../assets/images/photoshop.svg";
import illustrator from "../../assets/images/illustrator.svg";
import xd from "../../assets/images/xd.svg";
import hungama from "../../assets/images/Hungama.svg";
import evb from "../../assets/images/EVBazaar.svg";
import p2r from "../../assets/images/P2R.svg";
import design from "../../assets/images/Design_header_bg.png";
import scrollanim from "../../assets/GIFs/scrollanim.gif";
import { Container } from "react-bootstrap";
import { sociallinks } from "../../data";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  LinkedinBoxFill,
  Envelope,
  BehanceFill,
  DribbbleFill,
  InstagramFill,
  FacebookFill,
  WhatsappFill,
} from "akar-icons";
const Hero = () => {
  return (
    <div className="hero-section">
      <Container className="container">
        <h1 className="title">
          Ideate. Wireframe.
          <br />
          Prototype
        </h1>
      </Container>
      <div className="design page-bg-title">
        <img src={design} alt="DESIGN" />
      </div>
      <div className="hero-image-container">
        <div className="scrollanim-container">
          <img src={scrollanim} alt="scroll" />
        </div>
        <div className="social-links-hero-image">
          <a href={sociallinks[0].link} className="footer-link" target="blank">
            <LinkedinBoxFill size={24} className="link-icon linkedin" />
          </a>
          <a href={sociallinks[1].link} className="footer-link" target="blank">
            <Envelope size={24} className="link-icon mail" />
          </a>
          <a href={sociallinks[2].link} className="footer-link" target="blank">
            <BehanceFill size={24} className="link-icon behance" />
          </a>
          <a href={sociallinks[3].link} className="footer-link" target="blank">
            <DribbbleFill size={24} className="link-icon dribbble" />
          </a>
          <a href={sociallinks[4].link} className="footer-link" target="blank">
            <InstagramFill size={24} className="link-icon instagram" />
          </a>
          <a href={sociallinks[5].link} className="footer-link" target="blank">
            <FacebookFill size={24} className="link-icon facebook" />
          </a>
          <a href={sociallinks[6].link} className="footer-link" target="blank">
            <WhatsappFill className="link-icon whatsapp" />
          </a>
        </div>
        <Container className="hero-content-container">
          <div className="hero-content">
            <div className="hero-content-intro">
              <p>Hey, there!</p>
              <h2>I'm Aditya Sharma</h2>
            </div>
            <h3>A Google UX Design Professional certificate graduate</h3>
            <p>
              I help companies and creatives align their business goals with
              user needs by designing purposeful user interfaces for a better
              user experience.
            </p>
            <div className="hero-image-ctas">
              <Link to="/contactme" className="hero-cta primary-cta">
                Let's work together!
                <ArrowUpRight size={24} className="arrow-link-icon " />
              </Link>
              <Link to="/myworks" className="hero-cta secondary-cta">
                Glance at my work{" "}
                <ArrowUpRight size={24} className="arrow-link-icon " />
              </Link>
            </div>
          </div>
        </Container>
        <div className="skills-hero-image">
          <img src={figma} alt="figma" className="skills-icon" />
          <img src={photoshop} alt="photoshop" className="skills-icon" />
          <img src={illustrator} alt="illustrator" className="skills-icon" />
          <img src={xd} alt="xd" className="skills-icon" />
          <img src={react} alt="react" className="skills-icon" />
        </div>
        <div className="companies-container">
          <img src={hungama} alt="hungama" className="skills-icon" />
          <img src={evb} alt="EVBazaar" className="skills-icon" />
          <img src={p2r} alt="P2R" className="skills-icon" />
        </div>
        <img src={Me} className="hero-image" alt="Aditya" />
      </div>
    </div>
  );
};

export default Hero;
