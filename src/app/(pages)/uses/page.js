import { Container } from "@/components";
import { uses } from "@/content";
import { BASE_URL, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Uses",
  description: "Tools, hardware and gear I use daily.",
  openGraph: {
    url: `${BASE_URL}/uses`,
  },
});

export default function Uses() {
  return (
    <Container>
      {uses.map((section) => (
        <div key={section.category} className="mb-8">
          <p className="text-accent mb-3 text-xs lowercase">
            # {section.category}
          </p>
          <ul className="flex flex-col gap-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="border-b border-gray-200 pb-2 text-sm last:border-b-0 md:text-base lg:text-lg dark:border-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
}
