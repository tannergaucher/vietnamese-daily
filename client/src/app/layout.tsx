import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Head from "next/head";
import React from "react";

import { Header } from "@/app/components/header";

import { EmailForm } from "./components/email-form";
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Analytics />
      <body
        className={`flex flex-col justify-between min-h-screen ${beVietnamePro.className} bg-bg-1-light dark:bg-bg-1-dark text-text-color-light dark:text-text-color-dark`}
      >
        <Header title={metadata.title?.toString() ?? "Daily Vietnamese"} />
        <main className="my-6">{children}</main>
        <footer className="p-12 bg-bg-2-light dark:bg-bg-2-dark">
          <EmailForm />
        </footer>
      </body>
    </html>
  );
}
