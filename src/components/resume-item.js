import Image from "next/image";

export function ResumeItem({ item }) {
  return (
    <li className="flex flex-col gap-2 border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-800">
      <time className="text-muted text-xs">
        {item.from} - {item.to || "present"}
      </time>
      <div className="flex flex-col flex-wrap gap-2">
        {item.title && (
          <span className="text-strong text-sm font-semibold">
            {item.title.toLowerCase()}
          </span>
        )}
        <span className="text-muted inline-flex items-center gap-1 text-xs">
          {item.img && (
            <Image
              src={item.img}
              alt={item.name}
              width={16}
              height={16}
              className="rounded-sm"
              style={{ aspectRatio: "4/3" }}
            />
          )}
          <span>{item.name}</span>
        </span>
        <span className="text-muted inline-flex items-center gap-1 text-xs">
          {item.cc && (
            <Image
              className="rounded border border-gray-200 dark:border-gray-700"
              src={`/flags/${item.cc}.svg`}
              alt={item.location}
              width={16}
              height={16}
            />
          )}
          <span>{item.location}</span>
        </span>
      </div>
      {item.description && (
        <p className="text-muted mt-1 text-xs">{item.description}</p>
      )}
    </li>
  );
}
