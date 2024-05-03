import { decryptText } from "./security";
import { parseDate } from "./utils";
import { Archetype as ArchetypeType, Dream, RawDream } from "./types";

export function formatDream(
    rawDream: RawDream,
    archetypes: ArchetypeType[],
    email?: string,
    key?: string
): Dream {
    const dreamArchetype = archetypes.find((a) => a.name == rawDream.archetype);
    if (!dreamArchetype) {
        throw Error("Invalid dream archetype entry");
    }
    return {
        id: rawDream._id!!.toString(),
        userEmail: rawDream.userEmail,
        dreamtext: decryptText(rawDream.text, email, key),
        archetype: rawDream.archetype,
        date: parseDate(rawDream.date),
        goal: dreamArchetype.goal,
        aspect: dreamArchetype.aspect,
    };
}

export function joinArchetypesWithCount(
    archetypes: ArchetypeType[],
    counts: Record<string, number>
): ArchetypeType[] {
    for (let archetype of archetypes) {
        archetype.count = counts[archetype.name];
    }
    return archetypes;
}
