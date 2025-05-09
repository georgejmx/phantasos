import type { Aspect, RawDream } from "./types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const getCorrectThumbnail = (aspect: Aspect) => {
    if (aspect === "ego") return "/aspects/ego.png";
    if (aspect === "soul") return "/aspects/soul.png";
    return "/aspects/self.png";
};

export function toDefiniteArticle(word: string): string {
    return `The ${word[0].toUpperCase()}${word.slice(1)}`;
}

export function isValidEmail(input: string): boolean {
    return EMAIL_REGEX.test(input);
}

export function isValidPassword(input: string): boolean {
    return PASSWORD_REGEX.test(input);
}

export function parseDate(date: Date): string {
    return date.toUTCString().split(" ").slice(0, 4).join(" ");
}

export const aspectColourStyleMap: Record<Aspect, string> = {
    ego: "blue-200",
    self: "orange-200",
    soul: "yellow-200",
};

export function reverseString(str: string): string {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

export function parseCurrentArchetype(latestDreams: { archetype: string }[]): string | null {
    const counts: Record<string, number> = {};
    let maxCount = 0;
    let currentMax = null;

    for (const dream of latestDreams) {
        counts[dream.archetype] = (counts[dream.archetype] || 0) + 1;

        if (counts[dream.archetype] > maxCount) {
            maxCount = counts[dream.archetype];
            currentMax = dream.archetype;
        }
    }

    return currentMax ? toDefiniteArticle(currentMax) : null;
}
