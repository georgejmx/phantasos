"use client";

import { useRouter } from "next/navigation";

export default function ActionBar(): JSX.Element {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900 mt-2"
    >
      Go home
    </button>
  );
}
