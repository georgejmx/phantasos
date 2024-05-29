"use client";

import type { ApiResponse } from "../types";

export async function postDream(dreamtext: string, archetype: string): Promise<ApiResponse> {
    return {
        ok: false,
        message: "Unable to provide this data",
    };
}

export async function createUser(email: string, password: string): Promise<ApiResponse> {
    return {
        ok: true,
        message: `User created with email ${email}`,
    };
}
