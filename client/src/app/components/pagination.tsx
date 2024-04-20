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

  const goToPage = (pageNumber: number) => {
    router.push(`?page=${pageNumber}`);
  };

  return (
    <div>
      <Button
        disabled={page === 0}
        onClick={() => goToPage(page - 1)}
        secondary
      >
        Previous
      </Button>
      <Button
        disabled={nbHits <= hitsPerPage}
        onClick={() => goToPage(page + 1)}
        secondary
      >
        Next
      </Button>
    </div>
  );
}
