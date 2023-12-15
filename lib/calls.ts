"use client";

import { ApiResponse } from "./types";

export async function postDream(
  dreamtext: string,
  archetype: string
): Promise<boolean> {
  const response = await fetch("/api/dream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dreamtext, archetype }),
  });
  if (response.status < 300) return true;
  return false;
}

export async function createUser(
  email: string,
  password: string
): Promise<ApiResponse> {
  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.status === 201) {
    const responseBody = await response.json();
    return { ok: true, message: responseBody.message };
  } else if (response.status === 500) {
    const responseBody = await response.json();
    return { ok: false, message: responseBody.message };
  } else {
    return { ok: false, message: "Network error" };
  }
}
