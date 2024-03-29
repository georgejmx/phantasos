import { MongoClient, ServerApiVersion } from "mongodb";

// Set up required indexes if not already in place
async function configureMongo(clientPromise: Promise<MongoClient>) {
    const client = await clientPromise;
    const usersCollection = client.db(process.env.DB_NAME).collection("users");
    usersCollection.createIndex({ email: 1 }, { unique: true });
}

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
configureMongo(clientPromise);

export default clientPromise;
