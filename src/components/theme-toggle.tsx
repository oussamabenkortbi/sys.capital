import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("system");

  return theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />;
}
