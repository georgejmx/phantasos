import { redirect } from "next/navigation";

import getUserDetails from "@/app/api/auth/";
import { getDreams } from "@/app/api/dream/fetchers";
import { getArchetypes } from "@/app/api/archetype/fetchers";
import { formatDream } from "@/lib/formatters";
import { Dream as DreamType } from "@/lib/types";
import ActionBar from "@/components/ActionBar";
import Dream from "@/components/Dream";
import ErrorBox from "@/components/ErrorBox";

export default async function History(): Promise<JSX.Element> {
    const { email, key } = await getUserDetails();
    let dreams: DreamType[] = [];
    if (email && key) {
        const archetypes = await getArchetypes();
        const rawDreams = await getDreams(email);
        try {
            dreams = rawDreams.map((rawDream) => formatDream(rawDream, archetypes, email, key));
        } catch {
            dreams = [];
            redirect("/");
        }
    }

    return (
        <>
            <h1 className="text-xl font-bold text-purple-500 underline">Full History</h1>
            {dreams.length > 0 ? (
                <div className="overflow-auto lg:w-1/2">
                    {dreams.map((dream) => (
                        <Dream
                            key={dream.id}
                            text={dream.dreamtext}
                            date={dream.date}
                            goal={dream.goal}
                            aspect={dream.aspect}
                        />
                    ))}
                    {dreams.length === 0 && (
                        <p className="text-cyan-500 italic p-2 my-4">
                            You have no dreams to display
                        </p>
                    )}
                </div>
            ) : (
                <ErrorBox message="Error displaying dream history" />
            )}
            <ActionBar />
        </>
    );
}
