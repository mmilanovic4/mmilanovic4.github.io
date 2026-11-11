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
      // Padding the negative margin takes back: a 44px target around 16px of
      // text, sitting exactly where the text alone would.
      className="hover:text-accent text-muted -m-3.5 cursor-pointer p-3.5 text-xs whitespace-nowrap transition-colors select-none"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
    >
      {dark ? "[ light ]" : "[ dark ]"}
    </button>
  );
}
