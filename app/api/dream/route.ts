import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import { dreamsCollection } from "./fetchers";
import getUserDetails from "../auth";
import { CoreDream, RawDream } from "../../../lib/types";
import { encryptText } from "../../../lib/security";

const SECRET = process.env.NEXTAUTH_SECRET;

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const token = await getToken({ req: request, secret: SECRET });
        if (!token) {
            return NextResponse.json({ message: "Unable to provide this data" }, { status: 403 });
        }
        const { email, key } = await getUserDetails();
        const body: CoreDream = await request.json();
        const newDream: RawDream = {
            text: encryptText(body.dreamtext, email, key),
            archetype: body.archetype,
            date: new Date(),
            userEmail: email!,
        };
        await dreamsCollection.insertOne(newDream);
        return NextResponse.json({ message: "Dream successfully logged" }, { status: 201 });
    } catch (error: unknown) {
        return NextResponse.json({ message: String(error) }, { status: 500 });
    }
}
