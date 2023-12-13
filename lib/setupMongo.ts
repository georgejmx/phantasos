import { MongoClient, ServerApiVersion } from "mongodb";

let url: string;
if (process.env.MONGO_URL) {
  url = process.env.MONGO_URL as string;
} else {
  throw Error("Missing mongo connection string");
}

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const clientPromise = client.connect();
await client.db("admin").command({ ping: 1 });

export default clientPromise;
