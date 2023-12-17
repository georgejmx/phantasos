import { Archetype, Dream, RawDream } from "./types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export function isValidEmail(input: string): boolean {
    return EMAIL_REGEX.test(input);
}

export function isValidPassword(input: string): boolean {
    return PASSWORD_REGEX.test(input);
}

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
