"use client";

import { signOut } from "next-auth/react";

export default function ExitPopup() {
    return (
        <button
            className="font-serif fixed bottom-7 right-7 rounded border-purple-500 text-purple-500 font-bold py-1 px-2 bg-zinc-900 mb-4 mx-8 z-1 opacity-75 z-100 text-lg"
            onClick={() => signOut()}
        >
            Sign out
        </button>
    );
}
