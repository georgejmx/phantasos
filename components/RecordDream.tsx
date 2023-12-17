"use client";

import { ChangeEvent, useState } from "react";

import { RecordModalProps } from "@/lib/types";
import { postDream } from "@/lib/calls";
import SelectArchetypeGrid from "./SelectArchetypeGrid";

const DREAMTEXT_LIMIT = 1000;

export default function RecordDream(props: RecordModalProps): JSX.Element {
    const [selectedArchetype, setSelectedArchetype] = useState<string>("");
    const [dreamtext, setDreamtext] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState<string>("");

    const selectArchetypeHandler = (name: string) => setSelectedArchetype(name);
    const cancelHandler = () => props.onCancel();

    // Handle user attempt to post dream
    function confirmHandler() {
        if (!selectedArchetype) {
            setErrorMsg("Please select an archetype to mark your dream...");
            return;
        }

        postDream(dreamtext, selectedArchetype)
            .then((response) => {
                if (response.ok) {
                    props.onConfirm();
                } else {
                    setErrorMsg(response.message);
                }
            })
            .catch((error: unknown) => {
                console.error(error);
                setErrorMsg("Client error when posting dream");
            });
    }

    function handleDreamtext(event: ChangeEvent<HTMLTextAreaElement>) {
        setDreamtext(event.target.value);
    }

    return (
        <div role="dialog" className="z-50 fixed inset-2 top-12 overflow-y-auto">
            <div className="flex items-end justify-center text-center md:items-center sm:block">
                <div className="inline-block max-w-prose overflow-hidden text-left transition-all transform bg-black font-serif 2xl:max-w-2xl xl:w-3/5">
                    <div className="relative py-3 md:px-10 border border-b-4 border-purple-500 px-2">
                        <h1 className="mb-3 text-purple-500 font-semibold font-xl underline-offset-1">
                            Record Dream
                        </h1>

                        <div className="py-4 flex items-center">
                            <label htmlFor="dream-input" className="text-purple-500 mr-2">
                                Dream:
                            </label>
                            <textarea
                                value={dreamtext}
                                onChange={handleDreamtext}
                                id="dream-input"
                                className="my-1 text-purple-500 w-6/12 h-16 border border-purple-500 focus:border-purple-500 rounded bg-zinc-900"
                                maxLength={DREAMTEXT_LIMIT}
                            ></textarea>
                        </div>

                        <SelectArchetypeGrid
                            archetypes={props.archetypes}
                            onSelect={selectArchetypeHandler}
                        />

                        {errorMsg && (
                            <p className="text-cyan-500 italic p-2 my-4">{errorMsg}</p>
                        )}

                        <div>
                            <button
                                className="mr-2 rounded border-2 border-purple-500 p-2 text-purple-500 bg-black"
                                onClick={cancelHandler}
                            >
                                Cancel
                            </button>
                            <button
                                className="rounded border-2 border-purple-500 p-2 text-purple-500 bg-black"
                                onClick={confirmHandler}
                            >
                                Record
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
