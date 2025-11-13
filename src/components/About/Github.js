import React from "react";
import GitHubCalendar from "react-github-calendar"; // کامپوننت برای نمایش تقویم فعالیت‌های گیت‌هاب
import { Row, Col } from "react-bootstrap"; // استفاده از ردیف و ستون برای چیدمان ریسپانسیو
import { SiGithub } from "react-icons/si"; // ایکون گیت‌هاب

function Github() {
  return (
    // یک ردیف مرکزی با فاصله پایین 30px
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      
      {/* ستون اول برای عنوان و لینک گیت‌هاب */}
      <Col xs={12} style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 className="project-heading">
          Days I <strong className="purple">Code</strong>{" "}
          {/* لینک به پروفایل گیت‌هاب با ایکون */}
          <a
            href="https://github.com/MaedehR123" // لینک به گیت‌هاب شما
            target="_blank" // باز کردن لینک در تب جدید
            rel="noopener noreferrer" // برای امنیت بهتر
            style={{ color: "#6c63ff", textDecoration: "none", marginLeft: "10px" }} // استایل ایکون
          >
            <SiGithub size={30} /> {/* نمایش ایکون گیت‌هاب با اندازه 30 */}
          </a>
        </h1>
      </Col>

      {/* ستون دوم برای نمایش تقویم گیت‌هاب */}
      <Col xs={12} style={{ textAlign: "center" }}>
        <GitHubCalendar
          username="MaedehR123" // نام کاربری گیت‌هاب شما
          blockSize={15} // اندازه هر بلوک (هر روز)
          blockMargin={5} // فاصله بین بلوک‌ها
          color="#c084f5" // رنگ بلوک‌ها
          fontSize={16} // اندازه فونت تاریخ‌ها
        />
      </Col>
    </Row>
  );
}

export default Github; // صادر کردن کامپوننت برای استفاده در دیگر فایل‌ها

