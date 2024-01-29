import { getArchetypes } from "@/app/api/archetype/fetchers";
import ActionBar from "@/components/ActionBar";
import Archetype from "@/components/Archetype";

export default async function Archetypes(): Promise<JSX.Element> {
    const archetypes = await getArchetypes();

    return (
        <div className="max-w-prose text-center">
            <h1 className="text-xl font-bold text-purple-500 underline">Archetypes</h1>
            <p className="text-white p-2">
                <span className="italic">
                    &quot;One does not become enlightened by imagining figures of light, but
                    by making the darkness conscious. The later procedure, however, is
                    disagreeable and therefore not popular.&quot;
                </span>
                {"  "}
                -Carl Jung
            </p>
            <div className="overflow-auto">
                {archetypes.map((archetype) => (
                    <Archetype
                        key={archetype.name}
                        name={archetype.name}
                        goal={archetype.goal}
                        aspect={archetype.aspect}
                    />
                ))}
            </div>
            <ActionBar />
        </div>
    );
}
