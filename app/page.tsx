import { getServerSession } from "next-auth";

import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import { getArchetypes, getRandomDream } from "@/app/api/dream/fetchers";
import Menu from "@/components/Menu";
import { Dream, Archetype } from "@/lib/types";
import LoginMenu from "@/components/LoginMenu";

export default async function Home(): Promise<JSX.Element> {
  const session = await getServerSession(authConfig);
  let dream: Dream | null = null;
  let archetypes: Archetype[] | null = null;
  if (session) {
    console.log(session);
    dream = await getRandomDream(); // TODO: Use the email to search by user
    archetypes = await getArchetypes();
  }

  return (
    <>
      {session ? (
        <Menu
          email={session.user?.email}
          dream={dream}
          archetypes={archetypes}
        />
      ) : (
        <LoginMenu />
      )}
    </>
  );
}
