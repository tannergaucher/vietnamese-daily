import { Listbox } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const options = [
  "at the restaurant",
  "at the cafe",
  "at the street food vendor stall",
  "at the market",
  "asking a local for directions",
  "a health related situation",
  "an emergency situation",
  "at the hotel",
  "shopping at a store",
];

export function Filters() {
  const searchParams = useSearchParams();

  const router = useRouter();

  const typeParams = searchParams.getAll("type");

  const handleFilterClick = (filterOption: string) => {
    const encodedFilterOption = encodeURIComponent(filterOption);

    if (typeParams.includes(decodeURIComponent(encodedFilterOption))) {
      const newTypeParams = typeParams.filter(
        (param) => param !== decodeURIComponent(encodedFilterOption)
      );

      if (newTypeParams.length === 0) {
        router.push("/");

        return;
      }

      router.push(`?type=${newTypeParams.join("&type=")}`);

      return;
    }

    router.push(`?type=${[...typeParams, encodedFilterOption].join("&type=")}`);
  };

  const isActive = (option: string) => {
    return typeParams.includes(option);
  };

  return (
    <div className="relative w-full">
      <Listbox onChange={(value) => handleFilterClick(value)}>
        <div className="relative mt-1">
          <Listbox.Button className="absolute top-1/2 transform -translate-y-1/2 right-0 h-12 py-2 pl-3 pr-10 text-left text-lg font-bold dark:bg-accent-2-dark rounded-lg border border-gray-300 cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            <span className="block truncate">Situations</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-bg-1-light dark:bg-bg-1-dark rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className={`${
                  isActive(option)
                    ? "text-amber-900 bg-amber-100"
                    : "text-gray-900 dark:text-text-color-dark"
                }
                        cursor-default select-none hover:bg-accent-1-light dark:hover:bg-accent-2-dark relative py-2 pl-10 pr-4`}
              >
                {() => (
                  <>
                    <span
                      className={`${
                        isActive(option) ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {option}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
