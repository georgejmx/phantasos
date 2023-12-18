import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import { authConfig } from "@/app/api/auth/[...nextauth]/config";
import clientPromise from "@/lib/setupMongo";
import { CoreDream, RawDream } from "@/lib/types";
import { encryptText } from "@/lib/security";

export async function POST(request: NextRequest): Promise<NextResponse> {
    const session = await getServerSession(authConfig);
    try {
        if (!session) {
            throw Error("Unable to confirm client credentials");
        }
        const userEmail = session.user?.email as string;
        const client = await clientPromise;
        const collection = client.db(process.env.DB_NAME).collection("dreams");
        const body: CoreDream = await request.json();
        const newDream: RawDream = {
            text: encryptText(body.dreamtext, userEmail),
            archetype: body.archetype,
            date: new Date(),
            userEmail,
        };
        await collection.insertOne(newDream);
        return NextResponse.json({ message: "Dream successfully logged" }, { status: 201 });
    } catch (error: unknown) {
        return NextResponse.json({ message: String(error) }, { status: 500 });
    }
}
