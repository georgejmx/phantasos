import clientPromise from "@/lib/setupMongo";
import { RawDream } from "@/lib/types";

export async function getDreams(email: string): Promise<RawDream[]> {
  const client = await clientPromise;
  const out = [];
  const collection = client.db(process.env.DB_NAME).collection("dreams");
  const cursor = collection.find({
    userEmail: email,
  });
  for await (const item of cursor) {
    out.push(item as unknown as RawDream);
  }
  return out;
}

export async function getRandomDream(email: string): Promise<RawDream | null> {
  const client = await clientPromise;
  const collection = client.db(process.env.DB_NAME).collection("dreams");
  const cursor = await collection.aggregate([
    { $match: { userEmail: { $eq: email } } },
    { $sample: { size: 1 } },
  ]);
  let result: RawDream | null = null;
  for await (const item of cursor) {
    result = item as unknown as RawDream;
  }
  return result;
}
