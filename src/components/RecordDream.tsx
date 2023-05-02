import { ChangeEvent, useEffect, useState } from "react";
import { Archetype, RecordModalProps } from "../types/types";
import { getArchetypes, postDream } from "../helper";
import SelectArchetypeGrid from "./SelectArchetypeGrid";

function RecordDream(props: RecordModalProps): JSX.Element {
  const [archetypes, setArchetypes] = useState<Archetype[] | null>(null);
  const [selectedArchetypeId, setSelectedArchetypeId] = useState<number>(0);
  const [dreamtext, setDreamtext] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const dreamLimit: number = 1000;

  useEffect(() => {
    getArchetypes()
      .then((archetypes) => {
        setArchetypes(archetypes);
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg(error.message || "Error.");
      });
  }, []);

  function onSelectArchetype(id: number) {
    setSelectedArchetypeId(id);
  }

  function cancelHandler() {
    props.onCancel();
  }

  // Handle user attempt to post dream
  function confirmHandler() {
    if (selectedArchetypeId === 0) {
      setErrorMsg("Please select an archetype to mark your dream...");
      return;
    }

    postDream(dreamtext, selectedArchetypeId)
      .then((ok) => {
        if (ok) {
          props.onConfirm();
        } else {
          setErrorMsg("Failed to post dream");
        }
      })
      .catch((error: unknown) => {
        console.error(error);
        setErrorMsg("Error when posting dream");
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
                maxLength={dreamLimit}
              ></textarea>
            </div>

            {archetypes && (
              <SelectArchetypeGrid
                archetypes={archetypes}
                onSelect={onSelectArchetype}
              />
            )}

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

export default RecordDream;
