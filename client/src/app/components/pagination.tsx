"use client";

import { useRouter, useSearchParams } from "next/navigation";

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
    <div className="flex justify-center mt-6">
      <Button
        disabled={page === 0}
        onClick={() => goToPage(page - 1)}
        secondary
        className="mr-1"
      >
        Previous
      </Button>
      <Button
        disabled={nbHits <= hitsPerPage * (page + 1)}
        onClick={() => goToPage(page + 1)}
        className="ml-1"
        secondary
      >
        Next
      </Button>
    </div>
  );
}
