import clientPromise from "../../../lib/setupMongo";
import { RawDream } from "../../../lib/types";
import type { Collection } from "mongodb";

async function getDreamsCollection(): Promise<Collection<RawDream>> {
    const client = await clientPromise;
    return client.db(process.env.DB_NAME).collection("dreams");
}

export const dreamsCollection = await getDreamsCollection();

export async function getDreams(email: string, limit: number | null = null): Promise<RawDream[]> {
    const out = [];

    let cursor;
    if (limit) {
        cursor = dreamsCollection.find({ userEmail: email }).sort({ _id: -1 }).limit(limit);
    } else {
        cursor = dreamsCollection.find({ userEmail: email }).sort({ _id: -1 });
    }

    for await (const item of cursor) {
        out.push(item);
    }
    await cursor.close();
    return out;
}

export async function getRandomDream(email: string): Promise<RawDream | null> {
    const cursor = dreamsCollection.aggregate([
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
    const cursor = dreamsCollection.find({ userEmail: email }).project(projection);

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
