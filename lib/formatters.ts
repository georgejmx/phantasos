import { decryptText } from "./security";
import { parseDate } from "./utils";
import { Archetype, Dream, RawDream } from "./types";

export function formatDream(
    rawDream: RawDream,
    archetypes: Archetype[],
    email?: string | null
): Dream {
    const dreamArchetype = archetypes.find((a) => a.name == rawDream.archetype);
    if (!dreamArchetype) {
        throw Error("Invalid dream archetype entry");
    }
    return {
        id: rawDream._id!!.toString(),
        userEmail: rawDream.userEmail,
        dreamtext: decryptText(rawDream.text, email),
        archetype: rawDream.archetype,
        date: parseDate(rawDream.date),
        goal: dreamArchetype.goal,
        aspect: dreamArchetype.aspect,
    };
}
