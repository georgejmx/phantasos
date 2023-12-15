import clientPromise from "@/lib/setupMongo";
import { Archetype } from "@/lib/types";

export async function getArchetypes(): Promise<Archetype[]> {
  const client = await clientPromise;
  const out = [];
  const collection = client.db(process.env.DB_NAME).collection("archetypes");
  const cursor = collection.find();
  for await (const item of cursor) {
    out.push(item as unknown as Archetype);
  }
  return out;
}
