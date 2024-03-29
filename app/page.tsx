import { getServerSession } from "next-auth";
import Image from "next/image";

import { authConfig } from "@/app/api/auth/[...nextauth]/config";
import { getRandomDream } from "@/app/api/dream/fetchers";
import { getArchetypes } from "@/app/api/archetype/fetchers";
import { formatDream } from "@/lib/formatters";
import { Dream, Archetype } from "@/lib/types";
import Menu from "@/components/Menu";
import LoginMenu from "@/components/LoginMenu";

export default async function Home(): Promise<JSX.Element> {
    const session = await getServerSession(authConfig);
    let userEmail = "";
    let dream: Dream | null = null;
    let archetypes: Archetype[] | null = null;
    if (session?.user?.email) {
        userEmail = session.user.email;
        archetypes = await getArchetypes();
        const rawDream = await getRandomDream(userEmail);
        if (rawDream) {
            dream = formatDream(rawDream, archetypes, userEmail);
        }
    }

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
                &quot;where untold memories are rediscovered...&quot;
            </p>
            {session ? (
                <Menu email={userEmail} dream={dream} archetypes={archetypes} />
            ) : (
                <LoginMenu />
            )}
        </>
    );
}
