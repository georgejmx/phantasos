import { describe, it, expect } from "vitest";
import { parseCurrentArchetype } from "./utils";

describe("utils", () => {
    it("Parses a null archetype from an empty dreams array", () => {
        const result = parseCurrentArchetype([]);
        expect(result).toStrictEqual(null);
    });

    it("Parses the most frequent archetype from recent dreams", () => {
        const dreams = [
            { archetype: "outlaw" },
            { archetype: "jester" },
            { archetype: "outlaw" },
            { archetype: "jester" },
            { archetype: "outlaw" },
        ];

        const result = parseCurrentArchetype(dreams);
        expect(result).toStrictEqual("The Outlaw");
    });
});
