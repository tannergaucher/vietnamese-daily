import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Functional Vietnamese",
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
        <header className="bg-gray-800 text-white p-4">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300">
            <h1>{metadata.title?.toString()}</h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
