import { Transition } from "@headlessui/react";
import { useState } from "react";

import { Button } from "@/app/components/button";

export function Filters() {
  const [isShowing, setIsShowing] = useState(false);

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

  return (
    <>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Filter
      </button>
      <Transition
        show={isShowing}
        enter="transition-opacity transition-transform duration-200 ease-in-out"
        enterFrom="opacity-0 transform translate-x-[100%]"
        enterTo="opacity-100 transform translate-x-0"
        leave="transition-opacity transition-transform duration-200 ease-in-out"
        leaveFrom="opacity-100 transform translate-x-0"
        leaveTo="opacity-0 transform translate-x-[100%]"
      >
        <div className="absolute right-0 bg-bg-1-light dark:bg-bg-1-dark">
          <ul>
            {filterOptions.map((filterOption) => (
              <li key={filterOption}>
                <Button>{filterOption}</Button>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </>
  );
}
