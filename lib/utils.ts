import { Archetype, Dream, RawDream } from "./types";

function parseDate(date: Date): string {
  return date.toUTCString().split(" ").slice(0, 4).join(" ");
}

export function formatDream(rawDream: RawDream, archetypes: Archetype[]): Dream {
  const dreamArchetype = archetypes.find((a) => a.name == rawDream.archetype);
  if (!dreamArchetype) {
    throw Error("Invalid dream archetype entry");
  }
  return {
    id: rawDream._id!!.toString(),
    userEmail: rawDream.userEmail,
    dreamtext: rawDream.dreamtext,
    archetype: rawDream.archetype,
    date: parseDate(rawDream.date),
    goal: dreamArchetype.goal,
    aspect: dreamArchetype.aspect,
  };
}
