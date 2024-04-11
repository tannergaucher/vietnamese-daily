import React, { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Be_Vietnam_Pro } from "next/font/google";

import { EmailForm } from "./email-form";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Vietnamese",
  description:
    "Learn Vietnamese with conversations delivered to your inbox every day.",
};

const beVietnamePro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  display: "swap",
  weight: ["400", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col justify-between min-h-screen ${beVietnamePro.className} bg-bg-1-light dark:bg-bg-1-dark text-text-color-light dark:text-text-color-dark`}
      >
        <header className="p-4 bg-bg-2-light dark:bg-bg-2-dark">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-accent-1-light dark:hover:text-accent-1-dark"
          >
            <h1>{metadata.title?.toString()}</h1>
          </Link>
        </header>
        <main className="my-12">{children}</main>
        <footer className="p-12 bg-bg-2-light dark:bg-bg-2-dark">
          <EmailForm />
        </footer>
      </body>
    </html>
  );
}
