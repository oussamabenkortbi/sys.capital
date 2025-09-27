import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { cookies } from "next/headers";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Sys.Capital",
  description: "Sys.Capital | Software Development Agency",
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
  const initialDark = themeCookie === "dark" ? true : themeCookie === "light" ? false : undefined;

  return (
    <html lang="en" className={initialDark ? "dark" : undefined}>
      <body
        className={`${nunito.className} antialiased`}
      >
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
