// وارد کردن useEffect برای اجرای تابع در هنگام تغییر مسیر
// و useLocation برای دسترسی به مسیر فعلی (pathname)
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// کامپوننت ScrollToTop برای اسکرول خودکار به بالای صفحه هنگام تغییر مسیر
function ScrollToTop() {
  // گرفتن مسیر فعلی از React Router
  const { pathname } = useLocation();

  // هر بار که مسیر (pathname) تغییر کند، صفحه به بالا اسکرول می‌شود
  useEffect(() => {
    window.scrollTo(0, 0); // انتقال اسکرول به بالای صفحه
  }, [pathname]); // وابسته به تغییر مسیر

  // چون نیازی به نمایش چیزی در صفحه ندارد، مقدار null برمی‌گرداند
  return null;
}

// خروجی کامپوننت برای استفاده در سایر بخش‌ها
export default ScrollToTop;
