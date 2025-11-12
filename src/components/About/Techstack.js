import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiHtml5, DiCss3, DiReact } from "react-icons/di"; // جاوااسکریپت، HTML، CSS، React
import { SiFigma, SiGoogleanalytics, SiWordpress } from "react-icons/si"; // Figma، SEO (با Google Analytics)، WordPress
import { FaFileExcel, FaFileWord } from "react-icons/fa"; // Excel و Word

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> {/* HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React */}
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> {/* CSS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> {/* Figma */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics /> {/* SEO */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress /> {/* WordPress */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel /> {/* Excel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileWord /> {/* Word */}
      </Col>
    </Row>
  );
}

export default Techstack;
