import { getServerSession } from "next-auth";

import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import { getDreams } from "@/app/api/dream/fetchers";
import { getArchetypes } from "@/app/api/archetype/fetchers";
import { formatDream } from "@/lib/utils";
import { Dream as DreamType } from "@/lib/types";
import ActionBar from "@/components/ActionBar";
import Dream from "@/components/Dream";
import ErrorBox from "@/components/ErrorBox";

export default async function History(): Promise<JSX.Element> {
  const session = await getServerSession(authConfig);
  let dreams: DreamType[] | null = null;
  if (session) {
    const archetypes = await getArchetypes();
    const rawDreams = await getDreams(session.user?.email as string);
    dreams = rawDreams.map((rawDream) => formatDream(rawDream, archetypes));
  }

  return (
    <>
      <h1 className="text-xl font-bold text-purple-500 underline">
        Full History
      </h1>
      {session && dreams ? (
        <div className="overflow-auto">
          {dreams.map((dream) => (
            <Dream
              key={dream.id}
              text={dream.dreamtext}
              date={dream.date}
              goal={dream.goal}
              aspect={dream.aspect}
            />
          ))}
        </div>
      ) : (
        <ErrorBox />
      )}
      <ActionBar />
    </>
  );
}
