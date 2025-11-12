import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";

function About() {
  return (
    // بخش اصلی "درباره من"
    <Container fluid className="about-section">
      {/* افکت ذرات پس‌زمینه */}
      <Particle />

      {/* محتوای اصلی صفحه درباره من */}
      <Container>
        {/* ردیف اصلی شامل توضیحات و تصویر */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* ستون سمت راست شامل معرفی و کارت درباره من */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* عنوان اصلی درباره من */}
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              با من بیشتر <strong className="purple">آشنا شوید</strong>
            </h1>

            {/* کارت توضیحات درباره من */}
            <Aboutcard />
          </Col>

          {/* ستون سمت چپ شامل تصویر لپ‌تاپ */}
          <Col
            md={5}
            style={{ paddingTop: "15px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* عنوان بخش مهارت‌ها */}
        <h1 className="project-heading">
          مهارت‌های <strong className="purple">تخصصی</strong>
        </h1>

        {/* نمایش لیست مهارت‌ها */}
        <Techstack />

        {/* عنوان ابزارهایی که استفاده می‌کنم */}
        <h1 className="project-heading">
          <strong className="purple">ابزارهایی</strong> که استفاده می‌کنم
        </h1>

        {/* نمایش ابزارها */}
        <Toolstack />

        {/* نمایش بخش گیت‌هاب */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
