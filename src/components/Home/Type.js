import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "ساخت سایت‌های حرفه‌ای",
          "UI Design طراحی رابط کاربری",
          "UX Design طراحی تجربه کاربری",
          "پروژه سریع و با کیفیت بالا",
          "طراحی مدرن و شیک",
          "مدیریت و بهینه‌سازی وب‌سایت",
          "قابلیت ریسپانسیو و موبایل فرندلی",
          " React و JavaScript  توسعه فرانت‌اند با",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
