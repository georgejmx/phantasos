"use client";

import { GlobalErrorProps } from "@/lib/types";

export default function GlobalError(props: GlobalErrorProps) {
    return (
        <html lang="en">
            <body className="h-screen w-screen bg-gradient-to-br from-black to-purple-900 p-4">
                <main className="flex flex-col flex-wrap justify-center items-center bg-cover font-serif">
                    <h2 className="text-2xl font-bold text-cyan-500 mb-4">
                        Something went wrong with Phantasos
                    </h2>
                    <p className="text-cyan-600 text-xl">{props.error.message}</p>
                    <p className="text-cyan-600 text-md">{props.error.digest || "Oops!"}</p>
                    <button
                        onClick={() => props.reset()}
                        className="mt-4 px-4 py-2 border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900 active:bg-purple-800"
                    >
                        Retry
                    </button>
                </main>
            </body>
        </html>
    );
}
