import Image from "next/image";

import { getArchetypes, getRandomDream } from "@/app/api/dream/fetchers";
import NavigationPane from "@/components/NavigationPane";

export default async function Home(): Promise<JSX.Element> {
  const dream = await getRandomDream();
  const archetypes = await getArchetypes();

  return (
    <>
      <Image
        src="/whale.png"
        alt="Floating whale in purple blackground"
        className="py-6 rounded-lg opacity-60 shadow-md"
        width={80}
        height={80}
        priority
      />
      <h1 className="text-3xl font-bold text-purple-500">Phantasos</h1>
      <p className="italic text-white p-2 text-center">
        "where untold memories are rediscovered..."
      </p>
      <NavigationPane dream={dream} archetypes={archetypes} />
    </>
  );
}
