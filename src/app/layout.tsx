import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { cookies } from "next/headers";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "نجاح مشروعك يبدأ من كابيتال | Capital Systems",
  description:
    "شريكك الأول في الإدارة الحديثة والتحول الرقمي - نقدم حلولاً متكاملة تشمل: أجهزة ومعدات التسيير الاحترافية، أنظمة إدارية متخصصة، تطوير مواقع وتطبيقات متقدمة، استشارات وتدريب احترافي | Your trusted partner for modern management and digital transformation",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Determine initial theme from cookie on the server
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value as
    | "light"
    | "dark"
    | "system"
    | undefined;
  const initialDark =
    themeCookie === "dark" ? true : themeCookie === "light" ? false : undefined;

  return (
    <html lang="ar" dir="rtl" className={initialDark ? "dark" : undefined}>
      <body className={`${tajawal.className} antialiased`}>
        {/* Initialize theme from cookie before hydration to avoid FOUC and mismatches */}
        <Script id="theme-cookie-initializer" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var getCookie = function(name) {
                  var match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
                  return match ? decodeURIComponent(match[1]) : null;
                };
                var theme = getCookie('theme') || 'system';
                var media = window.matchMedia('(prefers-color-scheme: dark)');
                var isDark = theme === 'dark' || (theme === 'system' && media.matches);
                var root = document.documentElement;
                root.classList.toggle('dark', !!isDark);
                if (theme === 'system') {
                  var apply = function() { root.classList.toggle('dark', media.matches); };
                  media.addEventListener('change', apply);
                }
              } catch (e) { /* no-op */ }
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
