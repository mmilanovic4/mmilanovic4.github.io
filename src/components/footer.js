import { AUTHOR } from "@/lib/metadata";

export function Footer() {
  return (
    <footer className="text-muted mt-auto p-4 text-center text-xs">
      &copy; {AUTHOR}, {new Date().getFullYear()}.
    </footer>
  );
}
