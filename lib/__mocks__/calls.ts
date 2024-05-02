"use client";

import type { ApiResponse } from "../types";

export async function postDream(dreamtext: string, archetype: string): Promise<ApiResponse> {
    return {
        ok: false,
        message: "Unable to provide this data",
    };
}
