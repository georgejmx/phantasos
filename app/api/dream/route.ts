import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import clientPromise from "@/lib/setupMongo";
import { CoreDream, RawDream } from "@/lib/types";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const session = await getServerSession(authConfig);
  try {
    if (!session) {
      throw Error("Unable to confirm client credentials");
    }
    const client = await clientPromise;
    const collection = client.db(process.env.DB_NAME).collection("dreams");
    const body: CoreDream = await request.json();
    const newDream: RawDream = {
      ...body,
      date: new Date(),
      userEmail: session.user?.email as string,
    };
    await collection.insertOne(newDream);
    return NextResponse.json(
      { message: "Dream successfully logged" },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json({ message: String(error) }, { status: 500 });
  }
}
