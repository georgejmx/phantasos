import { NextRequest, NextResponse } from "next/server";

import { Dream } from "@/lib/types";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body: Dream = await request.json();
  console.log("Will be added to mongo: " + JSON.stringify(body));
  return NextResponse.json(
    { message: `Dream with id: ${body.id} logged` },
    { status: 201 }
  );
}
