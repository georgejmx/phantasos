"use client";

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
): Promise<boolean> {
  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.status < 300) return true;
  return false;
}
