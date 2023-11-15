"use client";

import { useRouter } from "next/navigation";

import { RediscoverModalProps } from "@/lib/types";
import Dream from "./Dream";

function RediscoverDream(props: RediscoverModalProps): JSX.Element {
  const router = useRouter();

  function returnHandler() {
    props.onCancel();
  }

  return (
    <div role="dialog" className="z-50 fixed inset-2 top-12 overflow-y-auto">
      <div className="flex items-end justify-center text-center md:items-center sm:block">
        <div className="inline-block max-w-prose overflow-hidden text-left transition-all transform bg-gradient-to-br from-zinc-900 to-black font-serif 2xl:max-w-2xl xl:w-3/5">
          <div className="relative py-3 md:px-10 border border-b-4 border-purple-500 px-2">
            <h1 className="mb-3 text-purple-500 font-semibold font-xl underline-offset-1">
              An illusion from the past..
            </h1>

            {props.dream ? (
              <Dream
                key={props.dream.id}
                text={props.dream.dreamtext}
                date={props.dream.date}
                goal={props.dream.goal}
                aspect={props.dream.aspect}
              />
            ) : (
              <p className="text-cyan-500 italic p-2 my-4">
                Error fetching a dream from server
              </p>
            )}

            <div>
              <button
                className="mr-2 rounded border-2 border-purple-500 p-2 text-purple-500 bg-black"
                onClick={returnHandler}
              >
                Go back
              </button>
              <button
                className="mr-2 rounded border-2 border-purple-500 p-2 text-purple-500 bg-black"
                onClick={() => router.push("/history")}
              >
                Show full history
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RediscoverDream;
