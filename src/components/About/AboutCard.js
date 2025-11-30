// 📦 ایمپورت کامپوننت‌های لازم از کتابخانه‌ها
import React from "react";
import Card from "react-bootstrap/Card"; // برای نمایش کارت اطلاعات
import { ImPointRight } from "react-icons/im"; // برای نمایش آیکن اشاره‌گر کنار آیتم‌ها

// 💬 کامپوننت AboutCard اطلاعات شخصی و علایق فرد را در قالب کارت نمایش می‌دهد
function AboutCard() {
  return (
    // 🟣 کارت اصلی که شامل توضیحات و نقل‌قول است
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* 📝 بخش معرفی شخصی */}
          <p style={{ textAlign: "center" }}>
            {/* معرفی با نام و محل زندگی */}
            سلام به همه! من <span className="purple">آیدا رضائی </span>
             <span className="purple">  </span> هستم
            <br />
            {/* توضیح موقعیت شغلی */}
            در حال حاضر به‌عنوان توسعه‌دهنده وب و طراح UI/UX فعالیت می‌کنم.
            <br />
            {/* توضیح درباره تحصیلات یا مسیر یادگیری */}
            زمینه‌ی تحصیلی و کاری من در طراحی، برنامه‌نویسی و بهینه‌سازی تجربه کاربری است.
            <br />
            <br />
            {/* مقدمه‌ای برای معرفی علایق شخصی */}
            : علاوه‌بر کدنویسی، به کارهای دیگه‌ای هم علاقه دارم مثل
          </p>

          {/* 🎯 لیست فعالیت‌ها یا علایق شخصی */}
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px 0" }}>
                 طراحی رابط کاربری خلاقانه  <ImPointRight style={{ marginRight: "8px", transform: "rotate(180deg)", marginLeft: "10px" }} />
              </li>
              <li style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px 0 " }}>
                 تولید محتوای آموزشی در حوزه وب   <ImPointRight style={{ marginRight: "8px", transform: "rotate(180deg)"  , marginLeft: "10px" }} />
              </li>
              <li style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "5px 0" }}>
                یادگیری و الهام از طراحی‌های جدید   <ImPointRight style={{ marginRight: "8px", transform: "rotate(180deg)"  , marginLeft: "10px"}} /> 
              </li>
              <li style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "5px 0" }}>
                مدیریت وب سایت  <ImPointRight style={{ marginRight: "8px", transform: "rotate(180deg)"  , marginLeft: "10px"}} /> 
              </li>
              <li style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "5px 0" }}>
                 اموزش و مدرس توسعه دهنده وب  <ImPointRight style={{ marginRight: "8px", transform: "rotate(180deg)"  , marginLeft: "10px"}} /> 
              </li>
            </ul>
            


          {/* 💬 جمله الهام‌بخش پایانی */}
          <p style={{ color: "rgb(155 126 172)", fontSize: "0.8rem", marginTop:"30px" }}>
            چیزی بساز که حتی خودت هم دوباره عاشق دیدنش شوی{" "}
          </p>

          {/* ✍️ امضای پایانی زیر نقل‌قول */}
          <footer className="blockquote-footer">آیدا رضائی</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

// 🚀 خروجی گرفتن از کامپوننت برای استفاده در سایر بخش‌ها
export default AboutCard;
