"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

import { SECONDARY } from "./button";

export function RemoveFilterButtons() {
  const searchParams = useSearchParams();

  const typeParams = searchParams.getAll("type");

  const router = useRouter();

  return (
    <div className="container mx-auto px-2 mb-6 flex justify-center items-center">
      {typeParams.map((typeParam) => (
        <button
          className={`flex justify-center items-center rounded-xl p-1 sm:p-3 mx-1 shadow h-12 text-xs sm:text-lg font-semibold leading-none ${SECONDARY}`}
          key={typeParam}
          onClick={() => {
            const newTypeParams = typeParams.filter(
              (param) => param !== typeParam
            );

            if (newTypeParams.length === 0) {
              router.push("/");

              return;
            }

            router.push(`?type=${newTypeParams.join("&type=")}`);
          }}
        >
          {typeParam}
          <X />
        </button>
      ))}
    </div>
  );
}

function X() {
  return (
    <div className="ml-1 dark:text-gray-300 text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-3 sm:w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  );
}
