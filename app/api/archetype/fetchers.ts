import clientPromise from "../../../lib/setupMongo";
import { Archetype } from "../../../lib/types";

export async function getArchetypes(): Promise<Archetype[]> {
    const client = await clientPromise;
    const out = [];
    const collection = client.db(process.env.DB_NAME).collection("archetypes");
    const projection = { name: 1, goal: 1, aspect: 1, description: 1, _id: 0 };
    const cursor = collection.find().project(projection);
    for await (const item of cursor) {
        out.push(item as unknown as Archetype);
    }
    await cursor.close();
    return out;
}
