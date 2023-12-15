"use client";

import { useEffect, useState } from "react";

import { SelectArchetypeGridProps, Archetype } from "@/lib/types";

function SelectArchetypeGrid(props: SelectArchetypeGridProps): JSX.Element {
  const archetypes: Archetype[] = props.archetypes;
  const [selectedArchetype, setSelectedArchetype] = useState<string>("");

  useEffect(() => {
    props.onSelect(selectedArchetype);
  }, [selectedArchetype, props]);

  return (
    <>
      <p className="px-10 py-2 underline font-montserrat text-pink-400">
        Archetype
      </p>
      <div className="mb-4">
        {archetypes.map((archetype) => (
          <button
            key={archetype.name}
            onClick={() => setSelectedArchetype(archetype.name)}
            className="py-2 px-6 mr-2 mb-2 bg-slate-900 font-montserrat rounded-full text-pink-400 focus:outline active:bg-purple-500 active:border-fuchsia-400"
          >
            {archetype.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default SelectArchetypeGrid;
