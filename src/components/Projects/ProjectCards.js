import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    // 🔹 کامپوننت کارت پروژه – یک کارت شامل تصویر، عنوان، توضیحات و لینک دمو
    <Card className="project-card-view">
      
      {/* 🔹 نمایش تصویر پروژه در بالای کارت */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

      <Card.Body>
        
        {/* 🔹 عنوان پروژه که از props دریافت می‌شود */}
        <Card.Title>{props.title}</Card.Title>

        {/* 🔹 متن توضیحات پروژه، با استایل وسط‌چین و فاصله بالا */}
        <Card.Text style={{ textAlign: "center", marginTop:"25px"}}>
          {props.description}
        </Card.Text>

        {/* 🔹 اگر لینک دمو ارسال شده باشد، دکمه "مشاهده پروژه" را نمایش بده */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"   // 🔹 باز شدن لینک در تب جدید
            style={{ marginTop: "10px" }}
          >
            {/* 🔹 آیکون وبسایت + متن دکمه */}
            <CgWebsite /> &nbsp; {"مشاهده پروژه"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
