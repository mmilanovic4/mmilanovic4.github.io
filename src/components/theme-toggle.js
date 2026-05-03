"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "@/components";

function subscribe(cb) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

export function ThemeToggle() {
  const { dark, setDark } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) return null;

  return (
    <button
      className="hover:text-accent text-muted cursor-pointer text-xs whitespace-nowrap transition-colors select-none"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
    >
      {dark ? "[ light ]" : "[ dark ]"}
    </button>
  );
}
