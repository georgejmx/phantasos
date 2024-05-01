"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { NavigationPaneProps } from "../lib/types";
import RecordDream from "./RecordDream";
import RediscoverDream from "./RediscoverDream";

export default function NavigationPane(props: NavigationPaneProps): JSX.Element {
    const router = useRouter();

    const [isRecordingDream, setRecordingDream] = useState(false);
    const [isRediscovering, setRediscovering] = useState(false);

    const recordHandler = () => setRecordingDream(true);
    const rediscoverHandler = () => setRediscovering(true);
    const stopRecordHandler = () => setRecordingDream(false);
    const stopRediscovering = () => setRediscovering(false);

    return (
        <>
            <div className="flex flex-col p-8 justify-evenly">
                <button
                    onClick={rediscoverHandler}
                    className="border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900 mb-4"
                >
                    Rediscover Dream
                </button>
                <button
                    onClick={recordHandler}
                    className="border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900 mb-4"
                >
                    Record Dream
                </button>
                <button
                    onClick={() => router.push("/archetype")}
                    className="border-2 border-purple-500 text-purple-500 font-bold p-1 mb-4 bg-gradient-to-br from-zinc-900 to-pink-950"
                >
                    View Archetypes
                </button>
            </div>
            {isRecordingDream && (
                <RecordDream
                    archetypes={props.archetypes}
                    onCancel={stopRecordHandler}
                    onConfirm={stopRecordHandler}
                />
            )}
            {isRediscovering && (
                <RediscoverDream dream={props.dream} onCancel={stopRediscovering} />
            )}
        </>
    );
}
