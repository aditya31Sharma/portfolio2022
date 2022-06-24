import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "akar-icons";
const GlanceAtWork = () => {
  return (
    <>
      <div className="glance-container">
        <p>Let's have a glance at my work</p>
        <div className="work-image-container">
          <Container className="work-content-container">
            <div className="grad-overlay-content-container">
              <p>Includes:</p>
              <h2>UX Design Portfolio</h2>
              <h3>Visual/UI Design</h3>
              <h4>Programming</h4>
              <Link to="/contactme" className="hero-cta primary-cta work-cta">
                Sure, let's have a glance
                <ArrowUpRight size={24} className="arrow-link-icon " />
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default GlanceAtWork;
