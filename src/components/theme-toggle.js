"use client";
import { useSyncExternalStore } from "react";

import { useTheme } from "@/components";

function subscribe(cb) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle() {
  const { dark, setDark } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!mounted) return null;

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="hover:text-accent text-muted cursor-pointer text-xs transition-colors"
      aria-label="Toggle theme"
    >
      {dark ? "[ light ]" : "[ dark ]"}
    </button>
  );
}
