"use client";

import Link from "next/link";

import { Button } from "./button";

import { Search } from "./search";

export function Header({ title }: { title: string }) {
  return (
    <header className="p-4 bg-bg-2-light dark:bg-bg-2-dark grid grid-cols-3 items-center">
      <Link
        href="/"
        className="text-2xl font-bold hover:text-accent-1-light dark:hover:text-accent-1-dark"
      >
        <h1>{title}</h1>
      </Link>
      <div>
        <Search />
      </div>
      <Button>Filter</Button>
    </header>
  );
}
