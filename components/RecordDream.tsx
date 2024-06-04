"use client";

import { ChangeEvent, useState } from "react";

import type { RecordModalProps } from "../lib/types";
import { postDream } from "../lib/calls";
import SelectArchetypeGrid from "./SelectArchetypeGrid";
import ErrorBox from "./ErrorBox";

const DREAMTEXT_LIMIT = 1000;
const BUTTON_DEFAULT_TEXT = "Record";

export default function RecordDream(props: RecordModalProps): JSX.Element {
    const [selectedArchetype, setSelectedArchetype] = useState("");
    const [dreamtext, setDreamtext] = useState("");
    const [buttonText, setButtonText] = useState(BUTTON_DEFAULT_TEXT);
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    const textHandler = (event: ChangeEvent<HTMLTextAreaElement>) =>
        setDreamtext(event.target.value);
    const selectArchetypeHandler = (name: string) => setSelectedArchetype(name);
    const cancelHandler = () => props.onCancel();

    // Handle user attempt to post dream
    function confirmHandler() {
        if (!selectedArchetype) {
            setErrorMsg("Please select an archetype to mark your dream...");
            return;
        }
        if (!dreamtext) {
            setErrorMsg("Please enter text to record a dream...");
            return;
        }

        setIsButtonEnabled(false);
        setButtonText("Recording...");
        postDream(dreamtext, selectedArchetype)
            .then((response) => {
                if (response.ok) {
                    props.onConfirm();
                } else {
                    setIsButtonEnabled(true);
                    setButtonText(BUTTON_DEFAULT_TEXT);
                    setErrorMsg(response.message);
                }
            })
            .catch((_: unknown) => {
                setIsButtonEnabled(true);
                setButtonText(BUTTON_DEFAULT_TEXT);
                setErrorMsg("Client error when posting dream");
            });
    }

    return (
        <div role="dialog" className="z-50 fixed inset-2 top-12 overflow-y-auto">
            <div className="flex items-end justify-center text-center md:items-center sm:block">
                <div className="inline-block max-w-prose overflow-hidden text-left transition-all transform bg-black 2xl:max-w-2xl xl:w-3/5">
                    <div className="relative py-3 md:px-10 border border-b-4 border-purple-500 px-2">
                        <h1 className="mb-3 text-purple-500 font-bold font-xl underline-offset-1">
                            Record Dream
                        </h1>

                        <div className="py-4 flex items-center">
                            <label htmlFor="dream-input" className="text-purple-500 mr-2">
                                Dream:
                            </label>
                            <textarea
                                value={dreamtext}
                                onChange={textHandler}
                                id="dream-input"
                                className="my-1 text-purple-500 w-6/12 h-16 border border-purple-500 focus:border-purple-500 rounded bg-zinc-900"
                                maxLength={DREAMTEXT_LIMIT}
                            ></textarea>
                        </div>

                        <SelectArchetypeGrid
                            archetypes={props.archetypes}
                            onSelect={selectArchetypeHandler}
                        />

                        {errorMsg && <ErrorBox message={errorMsg} />}

                        <div>
                            <button
                                className="mr-2 rounded border-2 border-purple-500 p-2 text-purple-500 bg-black"
                                onClick={cancelHandler}
                            >
                                Cancel
                            </button>
                            <button
                                className="rounded border-2 border-purple-500 p-2 text-purple-500 bg-black"
                                disabled={!isButtonEnabled}
                                onClick={confirmHandler}
                            >
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
