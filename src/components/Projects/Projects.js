import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sign from "../../Assets/Projects/sign_up_2.webp";
import slider from "../../Assets/Projects/accordion slider.webp";
import timerPomodoro from "../../Assets/Projects/timerPomodoro.webp";
import meno from "../../Assets/Projects/meno.webp";
import suicide from "../../Assets/Projects/suicide.png";

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
              imgPath={meno}
              isBlog={false}
              title="نمونه هاور جذاب و بسیار حرفه ای برای ایتم ها"
              description="استایل و هاور جذاب برای منو و ایتم های سایتتون و برای قیمت گذاری محصولات تون هم میشه اضافه کرد"
              demoLink="https://editor.soumya-jit.tech/"              
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
              imgPath={slider}
              isBlog={false}
              title="تجربه‌ای متفاوت از زیبایی و حرفه‌ای‌ در هر اسلاید"
              description="رابط کاربری روان، انتقال نرم بین اسلایدها و هماهنگی رنگ‌ها و انیمیشن‌ها، حس یک محصول حرفه‌ای و با کیفیت را القا می‌کند"
              demoLink="https://accordion-slider-rosy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
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
              imgPath={sign}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
             demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
