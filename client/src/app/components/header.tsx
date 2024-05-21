"use client";

import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";

import { Filters } from "./filters";
import { Search } from "./search";

export function Header({ title }: { title: string }) {
  const pathname = usePathname();

  return (
    <header className="p-4 bg-bg-2-light dark:bg-bg-2-dark grid grid-cols-1 sm:grid-cols-3 items-center sticky top-0 w-full">
      <Link
        href="/"
        className="hidden sm:block text-2xl font-bold hover:text-accent-1-light dark:hover:text-accent-1-dark"
      >
        <h1>{title}</h1>
      </Link>
      <div className="block sm:hidden">
        <MobileMenu title={title} />
      </div>
      <div className="hidden sm:block">
        <Search />
      </div>
      {pathname === "/" ? (
        <Suspense>
          <div className="hidden sm:block">
            <Filters />
          </div>
        </Suspense>
      ) : null}
    </header>
  );
}

function MobileMenu({ title }: { title: string }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="flex justify-between items-center">
            <Link href="/">
              <h2 className="font-black">{title}</h2>
            </Link>
            <Disclosure.Button className="p-2 text-xl hover:text-accent-1-light dark:hover:text-accent-1-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </Disclosure.Button>
          </div>
          <Transition
            show={open}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Disclosure.Panel>
              <div className="py-6">
                <h2>Search Content</h2>
                <Search />
                <h2>Filter Content</h2>
                <br />
                <Filters mobile />
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
