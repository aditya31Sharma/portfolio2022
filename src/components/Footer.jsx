import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sociallinks } from "../data";
import {
  LinkedinBoxFill,
  Envelope,
  BehanceFill,
  DribbbleFill,
  InstagramFill,
  FacebookFill,
  WhatsappFill,
} from "akar-icons";
const Footer = () => {
  return (
    <footer>
      <Container className="footer-container container">
        <div className="footer-text-container">
          <h3>Well,you've reached the end of this page</h3>
          <p>You can go ahead and explore further pages</p>
        </div>
        <div className="pages-container">
          <Link to="/" className="page-link">
            Home
          </Link>
          <Link to="/myworks" className="page-link">
            My works
          </Link>
          <Link to="/about" className="page-link">
            About me
          </Link>
          <Link to="/contactme" className="page-link">
            Contact me
          </Link>
        </div>

        <div className="social-container">
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
            <WhatsappFill size={24} className="link-icon whatsapp" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
