import { NextRequest, NextResponse } from "next/server";

import getUserDetails from "../auth";
import clientPromise from "../../../lib/setupMongo";
import { CoreDream, RawDream } from "../../../lib/types";
import { encryptText } from "../../../lib/security";

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const { email, key } = await getUserDetails();
        const client = await clientPromise;
        const collection = client.db(process.env.DB_NAME).collection("dreams");
        const body: CoreDream = await request.json();
        const newDream: RawDream = {
            text: encryptText(body.dreamtext, email, key),
            archetype: body.archetype,
            date: new Date(),
            userEmail: email!,
        };
        await collection.insertOne(newDream);
        return NextResponse.json({ message: "Dream successfully logged" }, { status: 201 });
    } catch (error: unknown) {
        return NextResponse.json({ message: String(error) }, { status: 500 });
    }
}
