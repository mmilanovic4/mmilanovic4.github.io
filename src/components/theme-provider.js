"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

// Reading localStorage throws when the visitor blocks cookies and site data;
// the theme then just lasts for the visit instead of taking the page down.
function getInitialTheme() {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem("theme") === "dark";
  } catch {
    return false;
  }
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Storage blocked, see getInitialTheme.
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
