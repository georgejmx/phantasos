/* API file and mock backend. Bits should be pasted into ts-node and fixed */

import { Dream } from "./types/types";

const API_URL: string = "http://localhost:3333";

export async function getDreams(): Promise<Dream[]> {
  const response = await fetch(API_URL + "/dreams");
  return await response.json();
}

export async function getRandomDream(): Promise<Dream> {
  // TODO: Will actually do a db transaction to first find count then select
  // random
  const randInt: number = Math.floor(Math.random() * 4);
  const response = await fetch(API_URL + "/dreams/" + randInt);
  return await response.json();
}

export async function postDream(dreamtext: string): Promise<boolean> {
  // TODO: Will actually be autoincremented and autogenerated by db
  const newDream: Dream = {
    dreamtext,
    id: String(Math.floor(Math.random() * 10000)),
    date: "1st jan 1974",
  };

  const response = await fetch(API_URL + "/dreams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDream),
  });
  if (response.status < 400) return true;
  return false;
}
