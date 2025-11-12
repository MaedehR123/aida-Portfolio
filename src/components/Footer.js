import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineGlobal,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>ساخته شده توسط آیدا رضائی</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> سفارش سایت حرفه‌ای و سریع خود را ثبت کنید</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* github */}
            <li className="social-icons">
              <a
                href="https://github.com/MaedehR123"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* instagram */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/siteup_web"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            {/* linkdin */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/MaedehR123/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* telegram */}
            <li className="social-icons">
              <a
                href="https://t.me/siteup_web"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            {/* site */}
               <li className="social-icons">
              <a
                href="https://my-portfolio-aida-rezaei.vercel.app"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineGlobal />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
