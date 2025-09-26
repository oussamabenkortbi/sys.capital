"use client";

import { useEffect, useMemo, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

type Theme = "light" | "dark" | "system";

export const Toggle = () => {
  const readCookie = (name: string): string | null => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(
      new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
    );
    return match ? decodeURIComponent(match[1]) : null;
  };

  const writeCookie = (name: string, value: string, days = 365) => {
    if (typeof document === "undefined") return;
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  };

  // Initialize from cookie (fallback to localStorage) on mount
  const [theme, setTheme] = useState<Theme>("system");
  useEffect(() => {
    try {
      const fromCookie = (readCookie("theme") as Theme | null);
      const stored = (localStorage.getItem("theme") as Theme | null);
      const initial: Theme = fromCookie ?? stored ?? "system";
      setTheme(initial);
    } catch {
      // no-op
    }
  }, []);

  // Apply theme to <html> and react to system changes when in 'system'
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const isDark = theme === "dark" || (theme === "system" && media.matches);
      root.classList.toggle("dark", isDark);
    };

    apply();

    if (theme === "system") {
      media.addEventListener("change", apply);
      return () => media.removeEventListener("change", apply);
    }
  }, [theme]);

  const cycle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : prev === "dark" ? "system" : "light";
      try {
        localStorage.setItem("theme", next);
      } catch {
        // no-op
      }
      try {
        writeCookie("theme", next);
      } catch {
        // no-op
      }
      return next;
    });
  };

  const icon = useMemo(() => {
    switch (theme) {
      case "light":
        return <Sun className="w-6 h-6" />;
      case "dark":
        return <Moon className="w-6 h-6" />;
      default:
        return <Laptop className="w-6 h-6" />;
    }
  }, [theme]);

  const label = `Theme: ${theme}`;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={label}
      title={`${label} (click to change)`}
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-800 p-2 transition-colors"
    >
      {icon}
    </button>
  );
};
