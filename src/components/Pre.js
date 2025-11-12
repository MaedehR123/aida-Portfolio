// وارد کردن کتابخانه React برای ساخت کامپوننت
import React from "react";

// تعریف کامپوننت Pre که وظیفه نمایش یا عدم نمایش لودر (صفحه بارگذاری) را دارد
function Pre(props) {
  // بررسی مقدار props.load:
  // اگر true باشد، المنت با id="preloader" نمایش داده می‌شود
  // اگر false باشد، المنت با id="preloader-none" (یعنی پنهان) نمایش داده می‌شود
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

// خروجی کامپوننت برای استفاده در سایر بخش‌های پروژه
export default Pre;
