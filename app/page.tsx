import Image from "next/image";
import { redirect } from "next/navigation";

import getUserDetails from "./api/auth";
import { getDreams, getRandomDream } from "./api/dream/fetchers";
import { getArchetypes } from "./api/archetype/fetchers";
import { formatDream } from "../lib/formatters";
import { parseCurrentArchetype } from "../lib/utils";
import { Dream, Archetype } from "../lib/types";
import Menu from "../components/Menu";
import LoginMenu from "../components/LoginMenu";
import ExitPopup from "../components/ExitPopup";
import GithubIcon from "../components/GithubIcon";
import AccountBubble from "../components/AccountBubble";
import CurrentArchetypeBubble from "../components/CurrentArchetypeBubble";

export default async function Home(): Promise<JSX.Element> {
    const { email, key } = await getUserDetails();

    let dream: Dream | null = null;
    let archetypes: Archetype[] | null = null;
    let currentArchetype: string | null = null;

    if (email && key) {
        archetypes = await getArchetypes();

        const latestDreams = await getDreams(email, 5);
        currentArchetype = parseCurrentArchetype(latestDreams);

        const rawDream = await getRandomDream(email);
        if (rawDream) {
            try {
                dream = formatDream(rawDream, archetypes, email, key);
            } catch {
                dream = null;
                redirect("/");
            }
        }
    }

    return (
        <>
            <GithubIcon />
            {email && <ExitPopup />}
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
            {email && <AccountBubble email={email} />}
            {currentArchetype && <CurrentArchetypeBubble archetype={currentArchetype} />}
            {email ? <Menu email={email} dream={dream} archetypes={archetypes} /> : <LoginMenu />}
        </>
    );
}
