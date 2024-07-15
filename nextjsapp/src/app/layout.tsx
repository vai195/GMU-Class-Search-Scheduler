import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GMU Course Scheduler - Home",
  description:
    "This website is a robust class search system specifically tailored for George Mason University, catering to a student population of over 30,000. It employs a MongoDB database to manage class and scheduling data, a Go application to establish a RESTful API for the backend, and a Next.js frontend for user-friendly interaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='p-4 max-w-7xl m-auto'>{children}</main>
      </body>
    </html>
  );
}
