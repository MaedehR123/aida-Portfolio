// وارد کردن کتابخانه‌های لازم
import React from "react";
import Particles from "react-tsparticles";

// تعریف کامپوننت Particle برای ایجاد افکت ذرات در پس‌زمینه
function Particle() {
  return (
    <Particles
      // شناسه‌ی مخصوص افکت برای کنترل در CSS یا سایر بخش‌ها
      id="tsparticles"

      // تنظیمات افکت ذرات
      params={{
        particles: {
          // تعداد ذرات و تراکم آن‌ها در صفحه
          number: {
            value: 160, // تعداد کلی ذرات
            density: {
              enable: true, // فعال بودن تراکم
              value_area: 1500, // محدوده پخش ذرات
            },
          },

          // خطوط بین ذرات (غیرفعال شده تا فقط نقاط دیده شوند)
          line_linked: {
            enable: false,
            opacity: 0.03,
          },

          // تنظیمات حرکت ذرات
          move: {
            direction: "right", // جهت حرکت به سمت راست
            speed: 0.05, // سرعت حرکت (خیلی ملایم)
          },

          // اندازه هر ذره
          size: {
            value: 2,
          },

          // تنظیم شفافیت و انیمیشن مربوط به آن
          opacity: {
            anim: {
              enable: true, // فعال بودن انیمیشن شفافیت
              speed: 1, // سرعت تغییر شفافیت
              opacity_min: 0.05, // حداقل میزان شفافیت
            },
          },
        },

        // تنظیمات تعامل کاربر با ذرات
        interactivity: {
          events: {
            onclick: {
              enable: true, // فعال بودن کلیک روی صفحه
              mode: "push", // اضافه شدن ذره جدید هنگام کلیک
            },
          },
          modes: {
            push: {
              particles_nb: 1, // تعداد ذراتی که با هر کلیک اضافه می‌شود
            },
          },
        },

        // فعال‌سازی نمایش بهتر برای صفحه‌نمایش‌های با کیفیت بالا (مانند Retina)
        retina_detect: true,
      }}
    />
  );
}

// خروجی کامپوننت برای استفاده در سایر بخش‌ها
export default Particle;
