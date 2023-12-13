import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phantasos",
  description: "Document your dreams..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-black to-purple-900 p-4`}
      >
        <main className="m-0 p-0 flex flex-col flex-wrap justify-center items-center bg-cover h-screen w-screen font-serif">
          <Image
            src="/whale.png"
            alt="Floating whale in purple blackground"
            className="py-6 rounded-lg opacity-60 shadow-md"
            width={80}
            height={80}
            priority
          />
          <h1 className="text-3xl font-bold text-purple-500">Phantasos</h1>
          <p className="italic text-white p-2 text-center">
            "where untold memories are rediscovered..."
          </p>
          {children}
        </main>
      </body>
    </html>
  );
}
