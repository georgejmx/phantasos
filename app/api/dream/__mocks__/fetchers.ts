import type { ObjectId } from "mongodb";
import { encryptText } from "../../../../lib/security";
import { RawDream } from "../../../../lib/types";

function generateDreamText(email: string) {
    return encryptText("a random mock dream", email, "arandomkeyoflength32222222222222");
}

export function getDreams(email: string, limit: number | null = null): RawDream[] {
    if (email === "tester@gmail.com" && limit === 5) {
        return [
            {
                _id: "4q25-4w5-4325" as unknown as ObjectId,
                text: generateDreamText(email),
                archetype: "innocent",
                userEmail: "tester@gmail.com",
                date: new Date(),
            },
        ];
    }
    throw new Error("Mock not implemented");
}

export function getRandomDream(email: string): RawDream {
    if (email === "tester@gmail.com") {
        return {
            _id: "4q25-4w5-4325" as unknown as ObjectId,
            text: generateDreamText(email),
            archetype: "innocent",
            userEmail: "tester@gmail.com",
            date: new Date(),
        };
    }
    throw new Error("Unexpected email");
}

export function getDreamArchetypeCount(email: string): Record<string, number> {
    if (email === "tester@gmail.com") {
        return {
            innocent: 1,
        };
    }
    throw new Error("Unexpected email");
}
