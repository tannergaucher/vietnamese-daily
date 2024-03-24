import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vietnamese Daily",
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
      <body className={inter.className}>
        <header>
          <Link href="/">
            <h1>{metadata.title?.toString()}</h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
