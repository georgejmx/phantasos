import { Aspect } from "../../../../lib/types";

export function getArchetypes() {
    return [
        {
            name: "innocent",
            goal: "safety",
            aspect: "ego" as Aspect,
            description: "The innocent seeks to maintain their childlike wonder",
        },
        {
            name: "ruler",
            goal: "control",
            aspect: "self" as Aspect,
            description: "A worshipper of order",
        },
    ];
}
