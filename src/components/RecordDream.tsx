import { ChangeEvent, useState } from "react";
import { RecordModalProps } from "../types/types";

function RecordDream(props: RecordModalProps): JSX.Element {
  const [dreamtext, setDreamtext] = useState("");

  const dreamLimit: number = 1500;

  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    console.log(dreamtext);
    props.onConfirm();
  }

  function handleDreamtext(event: ChangeEvent<HTMLTextAreaElement>) {
    setDreamtext(event.target.value);
  }

  return (
    <div className="z-50 fixed inset-2 top-12 overflow-y-auto">
      <div className="flex items-end justify-center text-center md:items-center sm:block">
        <div className="inline-block max-w-prose overflow-hidden text-left transition-all transform bg-zinc-900 font-serif 2xl:max-w-2xl xl:w-3/5">
          <div className="relative py-3 md:px-10 border border-b-4 border-purple-500 px-2">
            <h1 className="mb-3 text-emerald-500 font-semibold font-xl underline-offset-1">
              Record Dream
            </h1>

            <div className="py-4 flex items-center">
              <label htmlFor="dream-input" className="text-emerald-500 mr-2">
                Dream:
              </label>
              <textarea
                value={dreamtext}
                onChange={handleDreamtext}
                id="dream-input"
                className="my-1 text-emerald-500 h-16 border border-emerald-500 focus:border-purple-500 rounded bg-black"
                maxLength={dreamLimit}
              ></textarea>
            </div>

            <div>
              <button
                className="mr-2 rounded border-2 border-emerald-500 p-2 text-emerald-500 bg-black"
                onClick={cancelHandler}
              >
                Cancel
              </button>
              <button
                className="rounded border-2 border-emerald-500 p-2 text-emerald-500 bg-black"
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
