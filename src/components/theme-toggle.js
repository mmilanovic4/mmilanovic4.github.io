"use client";
import { useTheme } from "@/components";

export function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      suppressHydrationWarning
      className="hover:text-accent text-muted cursor-pointer text-xs whitespace-nowrap transition-colors select-none"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
    >
      {dark ? "[ light ]" : "[ dark ]"}
    </button>
  );
}
