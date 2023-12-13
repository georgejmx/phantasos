import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";

import clientPromise from "@/lib/setupMongo";
import { User } from "@/lib/types";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: { email: string; password: string } = await request.json();
    const newUser: User = {
      email: body.email,
      hash: await hash(body.password, 10),
    };
    const client = await clientPromise;
    const users = client.db(process.env.DB_NAME).collection("users");
    users.insertOne(newUser);
    return NextResponse.json(
      { message: `User created with email ${newUser.email}` },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "Unable to create user" },
      { status: 500 }
    );
  }
}
