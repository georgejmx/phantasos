import clientPromise from "@/lib/setupMongo";
import { RawDream } from "@/lib/types";
import type { Collection } from "mongodb";

async function getDreamsCollection(): Promise<Collection<RawDream>> {
    const client = await clientPromise;
    return client.db(process.env.DB_NAME).collection("dreams");
}

const DREAMS_COLLECTION = await getDreamsCollection();

export async function getDreams(email: string): Promise<RawDream[]> {
    const out = [];
    const cursor = DREAMS_COLLECTION.find({
        userEmail: email,
    });
    for await (const item of cursor) {
        out.push(item as RawDream);
    }
    await cursor.close();
    return out;
}

export async function getRandomDream(email: string): Promise<RawDream | null> {
    const cursor = DREAMS_COLLECTION.aggregate([
        { $match: { userEmail: { $eq: email } } },
        { $sample: { size: 1 } },
    ]);
    let result: RawDream | null = null;
    for await (const item of cursor) {
        result = item as RawDream;
    }
    await cursor.close();
    return result;
}

export async function getDreamArchetypeCount(email: string): Promise<Record<string, number>> {
    const scores: Record<string, number> = {};
    const projection = { archetype: 1 };
    const cursor = DREAMS_COLLECTION.find({
        userEmail: email,
    }).project(projection);

    for await (const curse of cursor) {
        const item = curse as { archetype: string };
        if (item.archetype in scores) {
            scores[item.archetype] += 1;
        } else {
            scores[item.archetype] = 1;
        }
    }
    await cursor.close();
    return scores;
}
