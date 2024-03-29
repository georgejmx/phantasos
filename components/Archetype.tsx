import Image from "next/image";

import { aspectColourStyleMap, getCorrectThumbnail, toDefiniteArticle } from "@/lib/utils";
import type { Archetype as ArchetypeType } from "@/lib/types";

export default function Archetype(props: ArchetypeType): JSX.Element {
    return (
        <div className="flex flex-row p-2 my-4 rounded opacity-75 bg-gradient-to-br from-pink-700 to-purple-700">
            <div className="flex flex-col justify-around p-2 max-w-80 basis-3/4">
                <h2 className="text-purple-200 text-lg font-extrabold drop-shadow-xl mb-2">
                    {toDefiniteArticle(props.name)}
                </h2>
                <p>{props.description}</p>
            </div>
            <div className="flex flex-col justify-center px-2 items-center basis-1/4">
                <Image
                    src={getCorrectThumbnail(props.aspect)}
                    alt={props.aspect + " image thumbnail"}
                    className={`w-9 h-9 mb-2 rounded-full bg-${
                        aspectColourStyleMap[props.aspect]
                    }`}
                    width={40}
                    height={40}
                />
                <p className={`text-${aspectColourStyleMap[props.aspect]} mb-2`}>
                    Related to the {props.aspect}
                </p>
                <p className="text-pink-200 text-sm font-montserrat italic ml-2">
                    Desires {props.goal}
                </p>
            </div>
        </div>
    );
}
