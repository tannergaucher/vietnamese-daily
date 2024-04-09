import React, { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { EmailForm } from "./email-form";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Vietnamese",
  description:
    "Learn Vietnamese with conversations delivered to your inbox every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-be-vietnam-pro flex flex-col justify-between min-h-screen text-vietnam-yellow`}
      >
        <header className="p-4">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300">
            <h1>{metadata.title?.toString()}</h1>
          </Link>
        </header>
        <main className="mb-auto">{children}</main>
        <footer className="p-4">
          <EmailForm />
        </footer>
      </body>
    </html>
  );
}
