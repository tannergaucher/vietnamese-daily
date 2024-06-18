"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { Button } from "@/app/components/button";

export function Pagination({
  nbHits,
  hitsPerPage,
}: {
  nbHits: number;
  hitsPerPage: number;
}) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") || "0");

  const typeParams =
    searchParams.getAll("type").length === 1
      ? searchParams.get("type")
      : searchParams.getAll("type");

  const goToPage = (pageNumber: number) => {
    let path = `?page=${pageNumber}`;

    if (typeParams) {
      const types = Array.isArray(typeParams) ? typeParams : [typeParams];
      types.forEach((type) => {
        path += `&type=${encodeURIComponent(type)}`;
      });
    }

    router.push(path);
  };

  return (
    <>
      <div className="flex justify-center mt-6">
        <Button
          name="Previous page"
          secondary
          disabled={page === 0}
          onClick={() => goToPage(page - 1)}
          className="mr-1 flex items-center"
        >
          <ChevronLeftIcon className="h-5 w-10 mr-1" />
        </Button>
        <Button
          name="Next page"
          secondary
          disabled={nbHits <= hitsPerPage * (page + 1)}
          onClick={() => goToPage(page + 1)}
          className="ml-1 flex items-center"
        >
          <ChevronRightIcon className="h-5 w-10 ml-1" />
        </Button>
      </div>
    </>
  );
}
