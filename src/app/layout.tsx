import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Geist, Geist_Mono } from 'next/font/google';
import Provider from "@/components/provider";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Sys.Capital",
  description: "Sys.Capital | Software Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Initialize theme before hydration to avoid FOUC */}
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var stored = localStorage.getItem('theme');
                var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = stored || 'system';
                var shouldDark = theme === 'dark' || (theme === 'system' && systemDark);
                var root = document.documentElement;
                if (shouldDark) {
                  root.classList.add('dark');
                } else {
                  root.classList.remove('dark');
                }
              } catch (e) { /* no-op */ }
            })();
          `}
        </Script>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
