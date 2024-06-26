import getUserDetails from "../api/auth";
import { getArchetypes } from "../api/archetype/fetchers";
import { getDreamArchetypeCount } from "../api/dream/fetchers";
import ActionBar from "../../components/ActionBar";
import Archetype from "../../components/Archetype";
import { joinArchetypesWithCount } from "../../lib/formatters";

export default async function Archetypes(): Promise<JSX.Element> {
    const archetypes = await getArchetypes();

    let countedArchetypes;
    const { email } = await getUserDetails();
    if (email) {
        const archetypeCountData = await getDreamArchetypeCount(email);
        countedArchetypes = joinArchetypesWithCount(archetypes, archetypeCountData);
    }

    return (
        <div className="max-w-prose text-center">
            <h1 className="text-xl font-bold text-purple-500 underline">Archetypes</h1>
            <p className="text-white p-2">
                <span className="italic font-thin">
                    &quot;One does not become enlightened by imagining figures of light, but by
                    making the darkness conscious. The later procedure, however, is disagreeable and
                    therefore not popular.&quot;
                </span>
                {"  "}
                -Carl Jung
            </p>
            <div className="overflow-auto">
                {countedArchetypes ? (
                    <>
                        {countedArchetypes.map((archetype) => (
                            <Archetype
                                key={archetype.name}
                                name={archetype.name}
                                goal={archetype.goal}
                                aspect={archetype.aspect}
                                description={archetype.description}
                                count={archetype.count}
                                showCounts
                            />
                        ))}
                    </>
                ) : (
                    <>
                        {archetypes.map((archetype) => (
                            <Archetype
                                key={archetype.name}
                                name={archetype.name}
                                goal={archetype.goal}
                                aspect={archetype.aspect}
                                description={archetype.description}
                                showCounts={false}
                            />
                        ))}
                    </>
                )}
            </div>
            <ActionBar />
        </div>
    );
}
