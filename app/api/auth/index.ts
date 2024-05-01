import { getServerSession } from "next-auth/next";

import { authConfig } from "./[...nextauth]/config";
import clientPromise from "@/lib/setupMongo";
import { User } from "@/lib/types";

type UserDetailsResponse = {
    email?: string;
    key?: string;
};

async function getUserKeyFromSession(sessionEmail: string) {
    const client = await clientPromise;
    const users = client.db(process.env.DB_NAME).collection("users");
    const user = (await users.findOne({ email: sessionEmail })) as User;
    return user.key;
}

export default async function getUserDetails(): Promise<UserDetailsResponse> {
    const session = await getServerSession(authConfig);
    if (!session) {
        return {};
    }
    let key;
    if (session.user?.email) {
        key = await getUserKeyFromSession(session.user?.email.toLowerCase());
    }
    return { email: session.user?.email ?? undefined, key };
}
