import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phantasos",
  description: "Document your dreams..",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-black to-purple-900 p-4`}>
        <main className="m-0 p-0 flex flex-col flex-wrap justify-center items-center bg-cover h-screen w-screen font-serif">
          {children}
        </main>
      </body>
    </html>
  );
}
