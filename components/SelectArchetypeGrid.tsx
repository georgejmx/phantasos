"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { SelectArchetypeGridProps, Archetype } from "../lib/types";

export default function SelectArchetypeGrid(props: SelectArchetypeGridProps): JSX.Element {
    const router = useRouter();

    const archetypes: Archetype[] = props.archetypes;
    const [selectedArchetype, setSelectedArchetype] = useState<string>("");

    useEffect(() => {
        props.onSelect(selectedArchetype);
    }, [selectedArchetype, props]);

    return (
        <>
            <div className="flex flex-row py-2 px-100">
                <p className="underline font-montserrat text-pink-400 mr-2">Archetype</p>
                <a onClick={() => router.push("/archetype")}>
                    <Image
                        src="/info.png"
                        alt="Info icon"
                        width={25}
                        height={10}
                        priority
                        className="hover:bg-white rounded-full"
                    />
                </a>
            </div>
            <div className="mb-4">
                {archetypes.map((archetype) => (
                    <button
                        key={archetype.name}
                        onClick={() => setSelectedArchetype(archetype.name)}
                        className={`py-2 px-6 mr-2 mb-2 font-montserrat rounded-full text-pink-400 bg-slate-900 ${
                            archetype.name === selectedArchetype
                                ? "border-fuchsia-400 border-4"
                                : ""
                        }`}
                    >
                        {archetype.name}
                    </button>
                ))}
            </div>
        </>
    );
}
