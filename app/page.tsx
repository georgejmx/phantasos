import { getServerSession } from "next-auth";

import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import { getRandomDream } from "@/app/api/dream/fetchers";
import { getArchetypes } from "@/app/api/archetype/fetchers";
import { formatDream } from "@/lib/utils";
import { Dream, Archetype } from "@/lib/types";
import Menu from "@/components/Menu";
import LoginMenu from "@/components/LoginMenu";

export default async function Home(): Promise<JSX.Element> {
  const session = await getServerSession(authConfig);
  let userEmail: string | null = null;
  let dream: Dream | null = null;
  let archetypes: Archetype[] | null = null;
  if (session) {
    userEmail = session.user?.email as string;
    archetypes = await getArchetypes();
    const rawDream = await getRandomDream(userEmail);
    dream = formatDream(rawDream, archetypes);
  }

  return (
    <>
      {session ? (
        <Menu email={userEmail} dream={dream} archetypes={archetypes} />
      ) : (
        <LoginMenu />
      )}
    </>
  );
}
