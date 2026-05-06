import { Container } from "@/components";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Miloš Milanović | Uses",
  description: "Tools, hardware and gear I use daily.",
  openGraph: {
    url: "https://mmilanovic4.github.io/uses",
  },
});

const uses = [
  {
    category: "Hardware",
    items: [
      'MacBook Pro, 14", Apple M5, 16 GB',
      'Lenovo IdeaPad 110, 15.6", Intel Core i7, 16 GB',
      "iPhone 16 Pro, 256 GB",
      "Nintendo Switch 2",
    ],
  },
  {
    category: "Software",
    items: ["VS Code", "Ghostty", "Bruno", "MongoDB Compass"],
  },
  {
    category: "Gear",
    items: ["AirPods 4 ANC", "Suunto Race S All Black"],
  },
];

export default function Uses() {
  return (
    <Container>
      {uses.map((section) => (
        <section key={section.category} className="mb-8">
          <p className="text-accent mb-3 text-xs">
            # {section.category.toLowerCase()}
          </p>
          <ul className="flex flex-col gap-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="border-b border-gray-200 pb-2 text-sm last:border-b-0 dark:border-gray-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Container>
  );
}
