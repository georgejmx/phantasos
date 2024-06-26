import Image from "next/image";

import { aspectColourStyleMap, getCorrectThumbnail } from "../lib/utils";
import type { DreamProps } from "../lib/types";

export default function Dream(props: DreamProps): JSX.Element {
    return (
        <div className="flex text-center flex-col p-2 my-4 rounded opacity-75 bg-gradient-to-br from-pink-700 to-purple-700">
            <p className="italic font-semibold">{props.date}</p>
            <p className="py-1">{props.text}</p>
            <div className="flex">
                <Image
                    src={getCorrectThumbnail(props.aspect)}
                    alt={props.aspect + " image thumbnail"}
                    className={`w-9 h-9 p-0.5 rounded-full bg-${
                        aspectColourStyleMap[props.aspect]
                    }`}
                    width={10}
                    height={10}
                />
                <p className="py-1 text-pink-200 font-montserrat italic ml-2">
                    In search of {props.goal}
                </p>
            </div>
        </div>
    );
}
