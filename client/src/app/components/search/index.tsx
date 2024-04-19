"use client";

import { useState, useEffect } from "react";
import { Combobox } from "@headlessui/react";
import { ContentHit } from "@functional-vietnamese/cloud-function-events";
import { useRouter } from "next/navigation";

import { INPUT_CLASSES } from "@/app/components/input";

export function Search() {
  const [selected, setSelected] = useState<ContentHit | null>(null);
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState<ContentHit[]>([]);

  const router = useRouter();

  useEffect(() => {
    fetch(
      `https://us-east1-daily-vietnamese.cloudfunctions.net/searchContent?search=${search}`
    )
      .then((response) => response.json())
      .then((data) => setOptions(data));
  }, [search]);

  console.log(selected, "selected");

  useEffect(() => {
    if (selected) {
      setSearch("");

      router.push(`/conversation/${selected.objectID}`);
    }
  }, [router, selected]);

  return (
    <>
      <div className="relative">
        <Combobox
          onChange={(value) => {
            const option = options.find((option) => option.title === value);

            if (option) {
              setSelected(option);
            }
          }}
        >
          <Combobox.Input
            placeholder="Search content"
            className={INPUT_CLASSES}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Combobox.Options className="absolute z-10 mt-1 w-full rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 overflow-auto bg-bg-1-light dark:bg-bg-1-dark">
            {options.map((option) => {
              return (
                <Combobox.Option
                  key={option.objectID}
                  value={option.title}
                  onClick={() => setSelected(option)}
                  className={({ active }) =>
                    `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                      active
                        ? "bg-bg-2-dark dark:bg-bg-2-light text-text-color-dark dark:text-text-color-light"
                        : "bg-bg-1-light dark:bg-bg-1-dark text-text-color-light dark:text-text-color-dark"
                    }`
                  }
                >
                  <span className="block truncate text-gray-500 dark:text-gray-300 text-sm">
                    {option.title}
                  </span>
                  <span className="font-bold text-lg">{option.situation}</span>
                </Combobox.Option>
              );
            })}
          </Combobox.Options>
        </Combobox>
      </div>
    </>
  );
}
