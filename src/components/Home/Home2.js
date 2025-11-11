import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          {/* تصویر سمت چپ */}
          <Col md={4} className="myAvtar text-center">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ maxHeight: "300px", width: "auto" }} // تصویر کوچکتر
              />
            </Tilt>
          </Col>

          {/* متن سمت راست */}
          <Col md={8} className="home-about-description" dir="rtl">
            <h1 style={{ fontSize: "2.6em" }}>
              بذار <span className="purple">خودمو معرفی </span> کنم
            </h1>
         <p className="home-about-body" style={{ direction: "rtl", textAlign: "right" }}>
            من توسعه‌دهنده فرانت‌اند و متخصص طراحی وب هستم، با مهارت بالا در <b>React</b> و <b>JavaScript</b>. عاشق خلق سایت‌ها و اپلیکیشن‌هایی هستم که هم سریع، کارآمد و با کیفیت بالا باشن، هم طراحی مدرن و تجربه کاربری (UX) بی‌نظیر داشته باشن.
            <br />
            <br />
            توی طراحی و مدیریت وب‌سایت حرفه‌ای عمل می‌کنم و پروژه‌ها را با <b>سرعت بالا، کیفیت عالی و استانداردهای مدرن وب</b> تحویل می‌دم.
            <br />
            <br />
            علاقه‌مندم رابط‌های کاربری (<b>UI</b>) جذاب بسازم تا کاربران واقعاً از سایت شما لذت ببرن و تجربه کاربری فراموش‌نشدنی داشته باشن.
            <br />
            <br />
            اگر دنبال یک <b>توسعه‌دهنده مستقل</b> هستی که پروژه وب‌سایتت رو سریع، شیک و حرفه‌ای آماده کنه، من آماده‌م <b>همین حالا</b> روی پروژه شما کار کنم و بهترین نتیجه را ارائه بدم.
            <br />
            <br />
            <b>همین امروز</b> با من تماس بگیر و پروژه خودت را به یک سایت مدرن و کارآمد تبدیل کن.
         </p>

          </Col>
        </Row>

        {/* بخش شبکه‌های اجتماعی */}
        <Row>
          <Col md={12} className="home-about-social text-center">
            <h1>منو پیدا کن</h1>
            <p>
              در<span className="purple"> ارتباط </span> باش
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
