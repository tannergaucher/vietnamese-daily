"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/app/components/button";

export function Pagination() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") || "0");

  const goToPage = (pageNumber: number) => {
    router.push(`?page=${pageNumber}`);
  };

  return (
    <div>
      <Button onClick={() => goToPage(page - 1)}>Previous</Button>
      <Button onClick={() => goToPage(page + 1)}>Next</Button>
    </div>
  );
}
