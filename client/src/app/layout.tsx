import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <body
        className={`font-be-vietnam-pro flex flex-col justify-between min-h-screen text-vietnam-yellow`}
      >
        <header className="bg-vietnam-red text-white p-4">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300">
            <h1>{metadata.title?.toString()}</h1>
          </Link>
        </header>
        <main className="mb-auto">{children}</main>
        <footer className="bg-vietnam-red text-white p-4">
          <form className="flex flex-col items-center justify-center">
            <label htmlFor="email" className="my-4 text-xl">
              Subscribe to daily Vietnamese conversations.
            </label>
            <div className="flex justify-evenly items-center">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="my-4 mr-2 p-2 flex-grow rounded border border-gray-300"
              />
              <button
                type="submit"
                className="my-4 px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-200"
              >
                Sign Up
              </button>
            </div>
          </form>
        </footer>
      </body>
    </html>
  );
}
