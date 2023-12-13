import { Archetype, Dream } from "@/lib/types";

export async function getDreams(): Promise<Dream[]> {
  return Promise.resolve([
    {
      id: 0,
      dreamtext: "walking up kilimanjaro with nana",
      date: "1st jan 1970",
      archetypeId: 2,
      goal: "understanding",
      aspect: "self",
    },
    {
      id: 1,
      dreamtext: "snowed in school",
      date: "1st jan 1971",
      archetypeId: 1,
      goal: "safety",
      aspect: "ego",
    },
    {
      dreamtext: "eternal hide and seek i wanted to last forever",
      archetypeId: 3,
      id: 2,
      date: "02/05/2023",
      goal: "freedom",
      aspect: "soul",
    },
    {
      dreamtext: "being in the navy; putting out a fire",
      archetypeId: 6,
      id: 9350,
      date: "19/05/2023",
    },
    {
      dreamtext: "in the navy and there a missile that hit the ship. ......",
      archetypeId: 6,
      id: 929,
      date: "23/06/2023",
    },
  ]);
}

export async function getRandomDream(): Promise<Dream> {
  /*
db.users.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $sample: 1 }
])
  */
  const dreams = await getDreams();
  const randInt: number = Math.floor(Math.random() * dreams.length);
  return dreams[randInt];
}

export async function getArchetypes(): Promise<Archetype[]> {
  return Promise.resolve([
    {
      id: 1,
      name: "innocent",
      goal: "safety",
      aspect: "ego",
      description: "",
    },
    {
      id: 2,
      name: "sage",
      goal: "understanding",
      aspect: "self",
      description: "",
    },
    {
      id: 3,
      name: "explorer",
      goal: "freedom",
      aspect: "soul",
      description: "",
    },
    {
      id: 4,
      name: "outlaw",
      goal: "liberation",
      aspect: "soul",
      description: "",
    },
    {
      id: 5,
      name: "magician",
      goal: "power",
      aspect: "self",
      description: "",
    },
    {
      id: 6,
      name: "hero",
      goal: "mastery",
      aspect: "ego",
      description: "",
    },
    {
      id: 7,
      name: "lover",
      goal: "intimacy",
      aspect: "soul",
      description: "",
    },
    {
      id: 8,
      name: "jester",
      goal: "enjoyment",
      aspect: "self",
      description: "",
    },
    {
      id: 9,
      name: "everyman",
      goal: "belonging",
      aspect: "ego",
      description: "",
    },
    {
      id: 10,
      name: "caregiver",
      goal: "service",
      aspect: "ego",
      description: "",
    },
    {
      id: 11,
      name: "ruler",
      goal: "control",
      aspect: "self",
      description: "",
    },
    {
      id: 12,
      name: "creator",
      goal: "innovation",
      aspect: "soul",
      description: "",
    },
  ]);
}
