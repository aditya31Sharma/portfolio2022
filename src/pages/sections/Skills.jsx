import React from "react";
import { Container } from "react-bootstrap";
import pentool from "../../assets/images/pentool.svg";
import shapes from "../../assets/images/shapes.svg";
import figma from "../../assets/images/figma888.svg";
import wireframe from "../../assets/images/wireframe.svg";
import photoshop from "../../assets/images/photoshop888.svg";
import illustrator from "../../assets/images/illustrator888.svg";
import xd from "../../assets/images/xd888.svg";
const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <img src={pentool} alt="pentool" className="pentool" />
        <img src={shapes} alt="shapes" className="shapes" />
        <Container className="container skills-content-container">
          <p>So, what am I good at?</p>
          <h2>I'm constantly learning new things</h2>
          <span>and trying to master some</span>
          <h3>But here are a few things that I believe I’m really good at!</h3>

          <div className="actual-skills-container">
            <div className="skill-card figma">
                <img src={figma} alt="figma"/>
                <p>Figma</p>
            </div>
            <div className="skill-card photoshop">
                <img src={photoshop} alt="photoshop"/>
                <p>Photoshop</p>
            </div>
            <div className="skill-card illustrator">
                <img src={illustrator} alt="illustrator"/>
                <p>Illustrator</p>
            </div>
            <div className="skill-card xd">
                <img src={xd} alt="xd"/>
                <p>Adobe XD</p>
            </div>
            <div className="skill-card wireframe">
                <img src={wireframe} alt="wireframe"/>
                <p>Wireframe & Prototyping</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skills;
