import { Archetype as ArchetypeType } from "@/lib/types";

export default function Archetype(props: ArchetypeType): JSX.Element {
    return (
        <div className="flex text-center flex-col p-2 my-4 rounded opacity-75 bg-gradient-to-br from-pink-700 to-purple-700">
            <p>{props.name}</p>
            <p>{props.goal}</p>
            <p>{props.aspect}</p>
        </div>
    );
}
