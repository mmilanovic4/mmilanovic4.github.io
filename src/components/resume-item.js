import Image from "next/image";

export function ResumeItem({ item }) {
  return (
    <li className="flex flex-col gap-2 border-b border-gray-200 pb-3 last:border-b-0 md:gap-3">
      <time className="w-28 shrink-0 text-sm text-gray-500 md:w-32 md:text-base">
        {item.from} - {item.to || "Present"}
      </time>

      <div className="flex flex-col flex-wrap gap-2 md:gap-3">
        {item.title && (
          <span className="font-semibold text-gray-800 md:mr-2">
            {item.title}
          </span>
        )}

        <span className="inline-flex items-center gap-1 text-sm text-gray-700 md:text-base">
          {item.img && (
            <Image
              src={item.img}
              alt={item.name}
              width={20}
              height={20}
              className="rounded-sm"
            />
          )}
          <strong>{item.name}</strong>
        </span>

        <span className="inline-flex items-center gap-1 text-sm text-gray-700 md:text-base">
          {item.cc && (
            <Image
              className="rounded border border-gray-300"
              src={`/flags/${item.cc}.svg`}
              alt={item.location}
              width={20}
              height={20}
            />
          )}
          <span>{item.location}</span>
        </span>
      </div>

      {item.description && (
        <p className="mt-1 text-sm text-gray-600">{item.description}</p>
      )}
    </li>
  );
}
