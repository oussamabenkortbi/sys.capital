import { Boxes, Workflow, Building2 } from "lucide-react";
import { GradientText } from "@/components/typography/gradient-text";

const Footer = () => (
  <footer className="relative bg-black text-white select-text py-16 sm:py-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-14 md:gap-16 text-center md:text-left uppercase font-bold tracking-wide">
      <div>
        <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-4">
          <GradientText className="font-extrabold">sys.capital</GradientText>
        </h3>
        <p className="text-xs sm:text-sm font-light tracking-normal opacity-80 dark:opacity-70">
          نمكّن الأعمال الجزائرية <br /> بحلول برمجية ومعدات احترافية
        </p>
        <p className="mt-4 sm:mt-6 text-[10px] sm:text-xs font-extrabold tracking-widest opacity-40 dark:opacity-50">
          © 2025 sys.capital
        </p>
      </div>

      <div>
        <h4 className="mb-4 sm:mb-6 text-base sm:text-lg tracking-widest opacity-80 inline-flex items-center gap-2">
          <Boxes
            className="size-4 text-[hsl(var(--secondary))]"
            aria-hidden="true"
          />{" "}
          الأنظمة
        </h4>
        <ul className="space-y-2 sm:space-y-3 font-extrabold text-xs sm:text-sm cursor-pointer">
          <li className="hover:opacity-70 transition-opacity">نظام CRM</li>
          <li className="hover:opacity-70 transition-opacity">منصة ERP</li>
          <li className="hover:opacity-70 transition-opacity">نظام POS</li>
          <li className="hover:opacity-70 transition-opacity">
            إدارة الموارد البشرية
          </li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 sm:mb-6 text-base sm:text-lg tracking-widest opacity-80 inline-flex items-center gap-2">
          <Workflow
            className="size-4 text-[hsl(var(--secondary))]"
            aria-hidden="true"
          />{" "}
          الخدمات
        </h4>
        <ul className="space-y-2 sm:space-y-3 font-extrabold text-xs sm:text-sm cursor-pointer">
          <li className="hover:opacity-70 transition-opacity">تطوير المواقع</li>
          <li className="hover:opacity-70 transition-opacity">
            تطبيقات الجوال
          </li>
          <li className="hover:opacity-70 transition-opacity">تكامل الأنظمة</li>
          <li className="hover:opacity-70 transition-opacity">الدعم الفني</li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 sm:mb-6 text-base sm:text-lg tracking-widest opacity-80 inline-flex items-center gap-2">
          <Building2
            className="size-4 text-[hsl(var(--accent))]"
            aria-hidden="true"
          />{" "}
          الشركة
        </h4>
        <ul className="space-y-2 sm:space-y-3 font-extrabold text-xs sm:text-sm cursor-pointer">
          <li className="hover:opacity-70 transition-opacity">من نحن</li>
          <li className="hover:opacity-70 transition-opacity">تواصل معنا</li>
          <li className="hover:opacity-70 transition-opacity">المتجر</li>
          <li className="hover:opacity-70 transition-opacity">الدعم</li>
        </ul>
      </div>
    </div>

    <div className="mt-14 sm:mt-16 md:mt-20 text-center text-[10px] sm:text-xs font-light opacity-60 dark:opacity-50">
      صُنع بـ <span className="text-red-500">❤️</span> من sys.capital
    </div>
  </footer>
);

export default Footer;
