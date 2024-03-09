import Image from "next/image";

import { aspectColourStyleMap, getCorrectThumbnail, toDefiniteArticle } from "@/lib/utils";
import type { Archetype as ArchetypeType } from "@/lib/types";

export default function Archetype(props: ArchetypeType): JSX.Element {
    return (
        <div className="flex flex-row p-2 my-4 rounded opacity-75 bg-gradient-to-br from-pink-700 to-purple-700">
            <div className="flex flex-col justify-around p-2 max-w-80 basis-3/4">
                <h2 className="text-purple-200 text-lg font-extrabold drop-shadow-lg align-middle">
                    {toDefiniteArticle(props.name)}
                </h2>
                <p>{props.description}</p>
            </div>
            <div className="flex flex-col justify-around px-2 w-140 items-center basis-1/4">
                <Image
                    src={getCorrectThumbnail(props.aspect)}
                    alt={props.aspect + " image thumbnail"}
                    className={`w-9 h-9 pb-1 rounded-full bg-${
                        aspectColourStyleMap[props.aspect]
                    }`}
                    width={40}
                    height={40}
                />
                <p className={`text-${aspectColourStyleMap[props.aspect]}`}>
                    Related to {props.aspect}
                </p>
                <p className="text-pink-200 font-montserrat italic ml-2">
                    Desires {props.goal}
                </p>
            </div>
        </div>
    );
}
