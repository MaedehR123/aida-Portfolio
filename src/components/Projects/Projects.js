import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sign from "../../Assets/Projects/sign_up_2.webp";
import slider from "../../Assets/Projects/accordion slider.webp";
import timerPomodoro from "../../Assets/Projects/timerPomodoro.webp";
import login from "../../Assets/Projects/login-register.webp";
import BMIBody from "../../Assets/Projects/BMIBody.webp";
import TravelList from "../../Assets/Projects/TravelList.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
         <h1 className="project-heading">
           پروژه‌های <strong className="purple">جدید من</strong>
         </h1>
         <p style={{ color: "white" }}>
           در این بخش می‌توانید تعدادی از جدیدترین پروژه‌هایی که روی آن‌ها کار کرده‌ام را ببینید
         </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="نمونه هاور جذاب و بسیار حرفه ای برای ایتم ها"
              description="استایل و هاور جذاب برای منو و ایتم های سایتتون و برای قیمت گذاری محصولات تون هم میشه اضافه کرد"
              demoLink="https://login-registe.vercel.app/"              
            />
          </Col>


          <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={timerPomodoro}
                  isBlog={false}
                  title="تایمر پومودورو"
                  description="تایمر پومودورو روشی مؤثر برای مدیریت زمان است که کار را به بازه‌های ۲۵ دقیقه‌ای با وقفه‌های کوتاه تقسیم می‌کند"
                  demoLink="https://psychology-test-qqhv.vercel.app/"
                />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slider}
              isBlog={false}
              title="تجربه‌ای متفاوت از زیبایی و حرفه‌ای‌ در هر اسلاید"
              description="رابط کاربری روان، انتقال نرم بین اسلایدها و هماهنگی رنگ‌ها و انیمیشن‌ها، حس یک محصول حرفه‌ای و با کیفیت را القا می‌کند"
              demoLink="https://accordion-slider-rosy.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BMIBody}
              isBlog={false}
              title="محاسبه شاخص توده بدنی BMI"
              description="ماشین حساب BMI به شما کمک می‌کند تا شاخص توده بدنی خود را سریع محاسبه و محدوده وزن سالم خود را بشناسید"
              demoLink="https://bmi-calculator-silk-gamma.vercel.app/"
            />
          </Col>



           <Col md={4} className="project-card">
              <ProjectCard
                imgPath={sign} 
                isBlog={false}
                title="فرم ورود سایت بسیار حرفه ای و متحرک"
                description = "ثبت‌نام سریع و ایمن با طراحی مدرن و پس‌زمینهٔ متحرک. الهام‌گرفته از اصول UI/UX حرفه‌ای برای تجربه‌ای روان و دل‌نشین"
                demoLink="https://sign-up-welcome.vercel.app/"
              />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelList}
              isBlog={false}
              title="چک لیست هوشمند سفر"
              description="اپ تحت وب که باعث میشه بدون استرس و نگرانی وسایل خود را برای سفر اماده کنی و چک کنی که وسایل مورد نیاز خود را برداشتید"
             demoLink="https://check-list-lime-pi.vercel.app/"      
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;