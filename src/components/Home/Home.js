import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      {/* بخش اصلی صفحه */}
      <Container fluid className="home-section" id="home">
        {/* افکت ذرات */}
        <Particle />

        {/* محتوای اصلی خانه */}
        <Container className="home-content">
          {/* ردیف اصلی: متن و تصویر */}
          <Row className="align-items-center flex-row-reverse">
            {/* ستون متن سمت راست */}
            <Col md={7} className="home-header" style={{ textAlign: "center" }}>
              {/* عنوان خوش آمدید */}
              <h1 style={{ paddingBottom:15}} className="heading">
                خوش آمدید{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              {/* نام و معرفی شما */}
              <h1 className="heading-name">
                من
                <strong className="main-name"> آیدا رضائی </strong>
                هستم
              </h1>

              {/* تایپ متحرک یا توضیحات اضافی */}
              <div style={{ paddingLeft: 90,paddingBlock:50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* ستون تصویر سمت چپ */}
            <Col md={5} style={{ paddingBottom: 20,    paddingTop: 30}}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* بخش معرفی و توضیحات بیشتر */}
      <Home2 />
    </section>
  );
}

export default Home;
