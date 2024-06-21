import { XIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import { Input } from "@/app/components/input";

export function Search() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  useEffect(() => {
    router.push(`/?query=${search}`);
  }, [search, router]);

  return (
    <>
      <Input
        type="search"
        name="search content"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {!search ? (
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={() => setSearch("search")}
        >
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
      ) : (
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={() => setSearch("")}
        >
          <XIcon className="h-5 w-5 text-gray-400" />
        </div>
      )}
    </>
  );
}
