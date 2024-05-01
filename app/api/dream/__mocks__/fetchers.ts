import type { ObjectId } from "mongodb";
import { encryptText } from "../../../../lib/security";
import { RawDream } from "../../../../lib/types";

function generateDreamText(email: string) {
    return encryptText("a random mock dream", email, "arandomkeyoflength32222222222222");
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
