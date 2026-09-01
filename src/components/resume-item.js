import Image from "next/image";

export function ResumeItem({ item }) {
  return (
    <li className="flex flex-col gap-2 border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700">
      <span className="text-muted text-xs md:text-sm lg:text-base">
        {item.from} – {item.to || "present"}
      </span>
      <div className="flex flex-col flex-wrap gap-2">
        {item.title && (
          <span className="text-strong -mt-0.5 mb-0.5 text-sm font-semibold md:text-base lg:text-lg">
            {item.title}
          </span>
        )}
        <span className="text-muted inline-flex items-center gap-1 text-xs md:text-sm lg:text-base">
          {item.img && (
            <span className="flex w-5 shrink-0">
              <Image
                className="rounded"
                src={item.img}
                alt={item.name}
                width={16}
                height={16}
              />
            </span>
          )}
          <span>{item.name}</span>
        </span>
        <span className="text-muted mt-1 inline-flex items-center gap-1 text-xs md:text-sm lg:text-base">
          {item.cc && (
            <Image
              className="w-5 shrink-0 rounded border border-gray-200 dark:border-gray-700"
              src={`/flags/${item.cc}.svg`}
              alt={item.location}
              width={20}
              height={15}
            />
          )}
          <span title={item.location}>{item.unlocode}</span>
        </span>
      </div>
      {item.description && (
        <p className="text-muted mt-1 text-xs md:text-sm lg:text-base">
          {item.description}
        </p>
      )}
    </li>
  );
}
