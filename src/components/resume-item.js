import Image from "next/image";

export function ResumeItem({ item }) {
  return (
    <li className="flex flex-col gap-2 border-b border-gray-200 pb-3 last:border-b-0 md:gap-3 dark:border-gray-800">
      <time className="text-xs text-gray-500 dark:text-gray-400">
        {item.from} - {item.to || "Present"}
      </time>

      <div className="flex flex-col flex-wrap gap-1">
        {item.title && (
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {item.title}
          </span>
        )}

        <span className="text-accent inline-flex items-center gap-1 text-sm">
          {item.img && (
            <Image
              src={item.img}
              alt={item.name}
              width={16}
              height={16}
              className="rounded-sm"
            />
          )}
          <strong>{item.name}</strong>
        </span>

        <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
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
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {item.description}
        </p>
      )}
    </li>
  );
}
