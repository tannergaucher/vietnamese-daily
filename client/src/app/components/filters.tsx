import { useState, useEffect, useRef, RefObject } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Transition } from "@headlessui/react";

import { Button } from "@/app/components/button";

export function Filters() {
  const [isShowing, setIsShowing] = useState(false);

  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsShowing(false));

  const router = useRouter();

  const filterOptions = [
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

  const searchParams = useSearchParams();

  const typeParams = searchParams.getAll("type");

  const handleFilterClick = (filterOption: string) => {
    const encodedFilterOption = encodeURIComponent(filterOption);

    router.push(`?type=${[...typeParams, encodedFilterOption].join("&type=")}`);
  };

  return (
    <>
      <Button
        onClick={() => setIsShowing((isShowing) => !isShowing)}
        className="w-fit justify-self-end"
        secondary
      >
        Filter
      </Button>
      <Transition
        show={isShowing}
        enter="transition-opacity transition-transform duration-200 ease-in-out"
        enterFrom="opacity-0 transform translate-x-[100%]"
        enterTo="opacity-100 transform translate-x-0"
        leave="transition-opacity transition-transform duration-200 ease-in-out"
        leaveFrom="opacity-100 transform translate-x-0"
        leaveTo="opacity-0 transform translate-x-[100%]"
      >
        <div
          className="absolute right-0 bg-bg-1-light dark:bg-bg-1-dark rounded p-2"
          ref={ref}
        >
          <ul>
            {filterOptions.map((filterOption) => (
              <li key={filterOption}>
                <Button
                  className="w-full my-2"
                  secondary
                  onClick={() => handleFilterClick(filterOption)}
                >
                  {filterOption}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </>
  );
}

function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
